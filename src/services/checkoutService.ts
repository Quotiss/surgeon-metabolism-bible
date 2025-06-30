
import { PolarEmbedCheckout } from '@polar-sh/checkout/embed';
import { createCheckoutSession } from './polarService';
import { toast } from 'sonner';

export type CheckoutStrategy = 'library' | 'api';
export type CheckoutTheme = 'light' | 'dark';
export type CheckoutLayout = 'modal' | 'inline' | 'drawer';

export interface CheckoutConfig {
  strategy: CheckoutStrategy;
  theme: CheckoutTheme;
  layout: CheckoutLayout;
  embedOrigin?: string;
}

export interface CheckoutInstance {
  id: string;
  url: string;
  close: () => void;
  addEventListener: (event: string, handler: (event: any) => void) => void;
}

class CheckoutService {
  private config: CheckoutConfig = {
    strategy: 'library',
    theme: 'light',
    layout: 'modal'
  };

  setConfig(config: Partial<CheckoutConfig>) {
    this.config = { ...this.config, ...config };
  }

  async createCheckout(source: string): Promise<CheckoutInstance> {
    console.log(`Creating checkout with ${this.config.strategy} strategy for source:`, source);

    try {
      if (this.config.strategy === 'library') {
        return await this.createLibraryCheckout(source);
      } else {
        return await this.createAPICheckout(source);
      }
    } catch (error) {
      console.warn(`${this.config.strategy} checkout failed, falling back to API:`, error);
      // Fallback to API approach if library fails
      if (this.config.strategy === 'library') {
        return await this.createAPICheckout(source);
      }
      throw error;
    }
  }

  private async createLibraryCheckout(source: string): Promise<CheckoutInstance> {
    // First create session to get URL
    const session = await createCheckoutSession(source, true);
    
    // Use Polar's official library
    const checkout = await PolarEmbedCheckout.create(session.url, this.config.theme);
    
    // Wrap in our interface
    return {
      id: session.id,
      url: session.url,
      close: () => checkout.close(),
      addEventListener: (event: string, handler: (event: any) => void) => {
        checkout.addEventListener(event, handler);
      }
    };
  }

  private async createAPICheckout(source: string): Promise<CheckoutInstance> {
    const session = await createCheckoutSession(source, true);
    
    // Return API-based checkout (for iframe approach)
    return {
      id: session.id,
      url: session.url,
      close: () => {
        // Will be handled by the modal/iframe component
        window.dispatchEvent(new CustomEvent('checkout-close'));
      },
      addEventListener: (event: string, handler: (event: any) => void) => {
        // Use window events for API approach
        window.addEventListener(`checkout-${event}`, handler);
      }
    };
  }
}

export const checkoutService = new CheckoutService();
