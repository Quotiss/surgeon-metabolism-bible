
import { useState, useCallback } from 'react';

export interface CheckoutState {
  isLoading: boolean;
  isOpen: boolean;
  error: string | null;
}

export const useCheckoutState = () => {
  const [state, setState] = useState<CheckoutState>({
    isLoading: false,
    isOpen: false,
    error: null
  });

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, isLoading: loading, error: null }));
  }, []);

  const setOpen = useCallback((open: boolean) => {
    setState(prev => ({ ...prev, isOpen: open }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error, isLoading: false }));
  }, []);

  const reset = useCallback(() => {
    setState({ isLoading: false, isOpen: false, error: null });
  }, []);

  return {
    ...state,
    setLoading,
    setOpen,
    setError,
    reset
  };
};
