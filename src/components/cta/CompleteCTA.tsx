import CTAButton from './CTAButton';
import CTASecurity from './CTASecurity';
import CTAGuarantee from './CTAGuarantee';
import CTAPricing from './CTAPricing';

interface CompleteCTAProps {
  onCTAClick: () => void;
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  showPricing?: boolean;
  showSecurity?: boolean;
  showGuarantee?: boolean;
  loading?: boolean;
  className?: string;
}

const CompleteCTA = ({ 
  onCTAClick, 
  buttonText = "Get Instant Access Now",
  variant = 'primary',
  size = 'default',
  showPricing = true,
  showSecurity = true,
  showGuarantee = true,
  loading = false,
  className = ""
}: CompleteCTAProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {showPricing && (
        <CTAPricing showFullDetails={true} />
      )}
      
      <CTAButton
        onClick={onCTAClick}
        variant={variant}
        size={size}
        loading={loading}
      >
        {buttonText}
      </CTAButton>
      
      {showSecurity && (
        <CTASecurity className="mt-3" />
      )}
      
      {showGuarantee && (
        <CTAGuarantee showBadge={true} className="mt-3" />
      )}
    </div>
  );
};

export default CompleteCTA;