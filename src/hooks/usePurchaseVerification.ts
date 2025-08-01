import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface PurchaseVerification {
  isVerified: boolean;
  isLoading: boolean;
}

const VERIFICATION_DURATION = 30 * 60 * 1000; // 30 minutes
const STORAGE_KEY = 'purchase_verification';

export const usePurchaseVerification = (): PurchaseVerification => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPurchase = () => {
      // Development mode bypass - always allow access during development
      if (import.meta.env.DEV) {
        setIsVerified(true);
        setIsLoading(false);
        return;
      }
      
      // Check URL parameters first
      const token = searchParams.get('token');
      const timestamp = searchParams.get('timestamp');
      
      if (token && timestamp) {
        // Verify token format and timestamp
        const purchaseTime = parseInt(timestamp);
        const currentTime = Date.now();
        
        if (currentTime - purchaseTime <= VERIFICATION_DURATION) {
          // Store verification in session storage
          const verificationData = {
            token,
            timestamp: purchaseTime,
            verified: true
          };
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(verificationData));
          setIsVerified(true);
          setIsLoading(false);
          
          // Clean URL parameters to prevent sharing
          window.history.replaceState({}, '', '/thank-you');
          return;
        }
      }
      
      // Check session storage for existing verification
      const storedVerification = sessionStorage.getItem(STORAGE_KEY);
      if (storedVerification) {
        try {
          const data = JSON.parse(storedVerification);
          const timeSinceVerification = Date.now() - data.timestamp;
          
          if (data.verified && timeSinceVerification <= VERIFICATION_DURATION) {
            setIsVerified(true);
            setIsLoading(false);
            return;
          } else {
            // Verification expired
            sessionStorage.removeItem(STORAGE_KEY);
          }
        } catch (error) {
          sessionStorage.removeItem(STORAGE_KEY);
        }
      }
      
      // No valid verification found - redirect to home
      setIsVerified(false);
      setIsLoading(false);
      navigate('/', { replace: true });
    };

    verifyPurchase();
  }, [searchParams, navigate]);

  return { isVerified, isLoading };
};

// Helper function to generate verification URL
export const generateThankYouUrl = (): string => {
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const timestamp = Date.now().toString();
  return `/thank-you?token=${token}&timestamp=${timestamp}`;
};