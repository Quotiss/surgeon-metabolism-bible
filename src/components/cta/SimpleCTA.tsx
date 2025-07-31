import CTAButton from './CTAButton';
import CTASecurity from './CTASecurity';
import CTAGuarantee from './CTAGuarantee';
import TrustBadge from '@/components/ui/TrustBadge';

interface SimpleCTAProps {
  onCTAClick: () => void;
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  loading?: boolean;
  className?: string;
}

const SimpleCTA = ({ 
  onCTAClick, 
  buttonText = "Get Instant Access Now",
  variant = 'primary',
  size = 'default',
  loading = false,
  className = ""
}: SimpleCTAProps) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <CTAButton
        onClick={onCTAClick}
        variant={variant}
        size={size}
        loading={loading}
      >
        {buttonText}
      </CTAButton>
      
      <div className="text-center space-y-1">
        <div className="text-3xl font-bold text-blue-600">
          Limited One-Time Offer
        </div>
        <div className="text-sm text-slate-600">
          (Offer expires once you leave this page)
        </div>
        <div className="text-3xl font-bold text-blue-600">
          ONLY $97
        </div>
        <div className="text-sm text-slate-600">
          ($400.00 Worth Of Value)
        </div>
      </div>
      
      <CTASecurity />
      
      <TrustBadge size="small" />
      
      <CTAGuarantee />
    </div>
  );
};

export default SimpleCTA;