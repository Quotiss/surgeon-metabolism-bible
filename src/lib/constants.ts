
// Gumroad product configuration
export const GUMROAD_CONFIG = {
  PRODUCT_URL: "https://noahgordon.gumroad.com/l/surgeonsmetabolismbible",
} as const;

// Polar checkout configuration
export const POLAR_CHECKOUT_LINK = "https://buy.polar.sh/polar_cl_TDPTM1gUs4Zjn40huVD0qoisBLTl8bCL32hRn0AvEpV";
export const POLAR_CHECKOUT_THEME = "light";   // explicit
export const PRODUCT_PRICE_USD = 27;        // fixed price

export const GUARANTEE_TEXT = "Instant download • 30-day money-back guarantee • For surgeons only";

export const PRODUCT_PRICING = {
  originalValue: 441,
  currentPrice: 27,
  futurePrice: 97,
} as const;

export const CTA_LOCATIONS = {
  HEADER: 'header',
  HERO: 'hero',
  FEATURES: 'features',
  MAIN_CTA: 'main_cta',
  FLOATING_MOBILE: 'floating_mobile',
} as const;

export const META_PIXEL_EVENTS = {
  INITIATE_CHECKOUT: 'InitiateCheckout',
  ADD_PAYMENT_INFO: 'AddPaymentInfo',
  PURCHASE: 'Purchase',
} as const;
