import CTAButton from './CTAButton';
import CTAPricing from './CTAPricing';
import CTAGuarantee from './CTAGuarantee';

interface PricingCTAProps {
  onCTAClick: () => void;
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  loading?: boolean;
  className?: string;
}

const PricingCTA = ({ 
  onCTAClick, 
  buttonText = "Get Instant Access Now",
  variant = 'primary',
  size = 'default',
  loading = false,
  className = ""
}: PricingCTAProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <CTAPricing showFullDetails={false} />
      
      <CTAButton
        onClick={onCTAClick}
        variant={variant}
        size={size}
        loading={loading}
      >
        {buttonText}
      </CTAButton>
      
      <CTAGuarantee showBadge={false} />
    </div>
  );
};

export default PricingCTA;