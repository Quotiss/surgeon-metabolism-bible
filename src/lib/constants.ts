
// Polar checkout configuration
export const POLAR_CONFIG = {
  CHECKOUT_LINK: "https://buy.polar.sh/polar_cl_TDPTM1gUs4Zjn40huVD0qoisBLTl8bCL32hRn0AvEpV",
  PRODUCT_ID: "8d8153d9-62d5-4edc-b28a-352fcde25ba4",
  ORGANIZATION_ID: "4b63298b-709b-477c-a02d-2d4735f9cc1b",
  THEME: "light"
} as const;

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
