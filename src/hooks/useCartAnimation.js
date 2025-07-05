import { useState, useCallback } from 'react';

export const useCartAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animateCartItem = useCallback((callback) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      if (callback) callback();
    }, 500);
  }, []);

  const animateAddToCart = useCallback((element) => {
    if (!element) return;

    element.classList.add('animate-bounce-subtle', 'text-ghana-green-600');
    setTimeout(() => {
      element.classList.remove('animate-bounce-subtle', 'text-ghana-green-600');
    }, 1000);
  }, []);

  const animateRemoveFromCart = useCallback((element) => {
    if (!element) return;

    element.classList.add('animate-slide-up', 'text-ghana-red-600');
    setTimeout(() => {
      element.classList.remove('animate-slide-up', 'text-ghana-red-600');
    }, 500);
  }, []);

  return {
    isAnimating,
    animateCartItem,
    animateAddToCart,
    animateRemoveFromCart,
  };
};