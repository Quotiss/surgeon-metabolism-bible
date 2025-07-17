
import React from 'react';

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient';
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ 
  children, 
  className,
  variant = 'default'
}) => {
  if (variant === 'gradient') {
    return (
      <span className={`bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent font-bold ${className || ''}`}>
        {children}
      </span>
    );
  }
  
  return <span className={className || "font-bold text-blue-600"}>{children}</span>;
};

export default HighlightedText;
