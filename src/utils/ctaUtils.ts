
import { GUMROAD_URL } from "@/lib/constants";
import type { CTAClickHandler } from "@/types/common";

export const createCTAHandler = (trackCTAClick: (location: string) => void): CTAClickHandler => {
  return (location: string = 'general') => {
    trackCTAClick(location);
    window.open(GUMROAD_URL, "_blank");
  };
};
