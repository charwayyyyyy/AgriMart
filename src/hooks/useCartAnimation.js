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

  const animateFlyToCart = useCallback((sourceElement, targetElement, imageUrl) => {
    if (!sourceElement || !targetElement || typeof window === 'undefined') return;
    
    // Get positions
    const sourceRect = sourceElement.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    
    // Create flying element
    const flyingElement = document.createElement('div');
    flyingElement.style.position = 'fixed';
    flyingElement.style.zIndex = '9999';
    flyingElement.style.width = '50px';
    flyingElement.style.height = '50px';
    flyingElement.style.borderRadius = '50%';
    flyingElement.style.backgroundImage = `url(${imageUrl})`;
    flyingElement.style.backgroundSize = 'cover';
    flyingElement.style.backgroundPosition = 'center';
    flyingElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    flyingElement.style.left = `${sourceRect.left + sourceRect.width / 2 - 25}px`;
    flyingElement.style.top = `${sourceRect.top + sourceRect.height / 2 - 25}px`;
    flyingElement.style.transition = 'all 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
    flyingElement.style.opacity = '1';
    
    // Add to body
    document.body.appendChild(flyingElement);
    
    // Trigger animation
    setTimeout(() => {
      flyingElement.style.transform = 'scale(0.5)';
      flyingElement.style.left = `${targetRect.left + targetRect.width / 2 - 12.5}px`;
      flyingElement.style.top = `${targetRect.top + targetRect.height / 2 - 12.5}px`;
      flyingElement.style.opacity = '0.8';
      
      // Animate target element
      targetElement.classList.add('animate-bounce-subtle');
      
      // Remove flying element after animation
      setTimeout(() => {
        if (document.body.contains(flyingElement)) {
          document.body.removeChild(flyingElement);
        }
        targetElement.classList.remove('animate-bounce-subtle');
      }, 800);
    }, 10);
  }, []);

  return {
    isAnimating,
    animateCartItem,
    animateAddToCart,
    animateRemoveFromCart,
    animateFlyToCart
  };
};