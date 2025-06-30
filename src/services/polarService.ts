
import { Polar } from '@polar-sh/sdk';
import { POLAR_CONFIG, PRODUCT_PRICING } from '@/lib/constants';
import { toast } from 'sonner';

const polar = new Polar({
  accessToken: POLAR_CONFIG.ACCESS_TOKEN,
});

export interface PolarCheckoutSession {
  id: string;
  url: string;
}

// Retry configuration
const RETRY_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000, // 1 second
  timeoutMs: 10000, // 10 seconds
};

// Network status check
const isOnline = (): boolean => {
  return navigator.onLine;
};

// Retry utility with exponential backoff
const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = RETRY_CONFIG.maxRetries
): Promise<T> => {
  let lastError: Error;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }
      
      // Exponential backoff: 1s, 2s, 4s
      const delay = RETRY_CONFIG.retryDelay * Math.pow(2, attempt);
      console.log(`Checkout attempt ${attempt + 1} failed, retrying in ${delay}ms:`, error);
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError!;
};

// Timeout wrapper
const withTimeout = <T>(promise: Promise<T>, timeoutMs: number): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), timeoutMs);
    })
  ]);
};

export const createCheckoutSession = async (source: string, embedded: boolean = true): Promise<PolarCheckoutSession> => {
  // Check network connectivity
  if (!isOnline()) {
    console.error('No internet connection available');
    toast.error('No internet connection', {
      description: 'Please check your connection and try again.',
      duration: 5000,
    });
    throw new Error('No internet connection');
  }

  try {
    console.log('Creating Polar checkout session for source:', source, 'embedded:', embedded);
    
    const checkoutSession = await retryWithBackoff(async () => {
      return await withTimeout(
        polar.checkouts.create({
          products: [POLAR_CONFIG.PRODUCT_ID],
          successUrl: `${window.location.origin}?checkout=success&source=${source}`,
          customerId: undefined,
          customerEmail: undefined,
          metadata: {
            source,
            originalPrice: PRODUCT_PRICING.originalValue.toString(),
            currentPrice: PRODUCT_PRICING.currentPrice.toString(),
            embedded: embedded.toString(),
            timestamp: new Date().toISOString(),
          }
        }),
        RETRY_CONFIG.timeoutMs
      );
    });

    console.log('Polar checkout session created successfully:', checkoutSession.id);
    
    // Track successful session creation
    if (window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('checkout-session-created', {
        detail: { sessionId: checkoutSession.id, source, embedded }
      }));
    }
    
    return {
      id: checkoutSession.id,
      url: checkoutSession.url
    };
  } catch (error) {
    console.error('Failed to create Polar checkout session after retries:', error);
    
    // Enhanced error handling with specific error types
    let errorMessage = 'Failed to create checkout session. Please try again.';
    let errorDescription = '';
    
    if (error instanceof Error) {
      if (error.message.includes('timeout')) {
        errorMessage = 'Request timed out';
        errorDescription = 'The payment system is taking too long to respond. Please try again.';
      } else if (error.message.includes('network')) {
        errorMessage = 'Network error';
        errorDescription = 'Please check your internet connection and try again.';
      } else if (error.message.includes('401') || error.message.includes('unauthorized')) {
        errorMessage = 'Authorization error';
        errorDescription = 'There was an issue with payment system authentication.';
      }
    }
    
    // Track checkout session creation failure
    if (window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('checkout-session-failed', {
        detail: { error: error instanceof Error ? error.message : 'Unknown error', source }
      }));
    }
    
    throw new Error(errorMessage);
  }
};

// Preload checkout resources for better performance
export const preloadCheckoutResources = () => {
  try {
    // Preconnect to Polar domains
    const preconnectLinks = [
      'https://polar.sh',
      'https://api.polar.sh'
    ];
    
    preconnectLinks.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      document.head.appendChild(link);
    });
    
    console.log('Polar checkout resources preloaded');
  } catch (error) {
    console.warn('Failed to preload checkout resources:', error);
  }
};
