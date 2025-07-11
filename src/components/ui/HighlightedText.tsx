
import React from 'react';

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ 
  children, 
  className = "font-bold text-blue-600" 
}) => {
  return <span className={className}>{children}</span>;
};

export default HighlightedText;
