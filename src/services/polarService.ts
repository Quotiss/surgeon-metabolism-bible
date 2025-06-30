
import { Polar } from '@polar-sh/sdk';
import { POLAR_CONFIG } from '@/lib/constants';

// Initialize Polar client
const polar = new Polar({
  accessToken: POLAR_CONFIG.ACCESS_TOKEN,
});

export interface CheckoutSession {
  id: string;
  url: string;
  client_secret?: string;
}

export const createCheckoutSession = async (source: string): Promise<CheckoutSession> => {
  try {
    console.log('Creating Polar checkout session for source:', source);
    
    const response = await polar.checkouts.create({
      products: [{
        product_id: POLAR_CONFIG.PRODUCT_ID,
        quantity: 1,
      }],
      success_url: `${window.location.origin}?checkout=success&source=${source}`,
      metadata: {
        source,
        timestamp: new Date().toISOString(),
      },
    });

    console.log('Polar checkout session created:', response);
    
    return {
      id: response.id,
      url: response.url,
      client_secret: response.client_secret,
    };
  } catch (error) {
    console.error('Failed to create Polar checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
};

export const getCheckoutSession = async (sessionId: string) => {
  try {
    const response = await polar.checkouts.get({
      id: sessionId,
    });
    return response;
  } catch (error) {
    console.error('Failed to get checkout session:', error);
    throw error;
  }
};
