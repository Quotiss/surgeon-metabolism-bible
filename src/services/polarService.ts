
import { Polar } from '@polar-sh/sdk';
import { POLAR_CONFIG, PRODUCT_PRICING } from '@/lib/constants';

const polar = new Polar({
  accessToken: POLAR_CONFIG.ACCESS_TOKEN,
});

export interface PolarCheckoutSession {
  id: string;
  url: string;
}

export const createCheckoutSession = async (source: string, embedded: boolean = true): Promise<PolarCheckoutSession> => {
  try {
    console.log('Creating Polar checkout session for source:', source, 'embedded:', embedded);
    
    const checkoutSession = await polar.checkouts.create({
      products: [POLAR_CONFIG.PRODUCT_ID],
      successUrl: `${window.location.origin}?checkout=success&source=${source}`,
      customerId: undefined, // Let Polar handle customer creation
      customerEmail: undefined, // Customer will enter during checkout
      metadata: {
        source,
        originalPrice: PRODUCT_PRICING.originalValue.toString(),
        currentPrice: PRODUCT_PRICING.currentPrice.toString(),
        embedded: embedded.toString(),
      }
    });

    console.log('Polar checkout session created:', checkoutSession.id);
    
    return {
      id: checkoutSession.id,
      url: checkoutSession.url
    };
  } catch (error) {
    console.error('Failed to create Polar checkout session:', error);
    throw new Error('Failed to create checkout session. Please try again.');
  }
};
