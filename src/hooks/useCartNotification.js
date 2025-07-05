import { useState, useCallback } from 'react';

export const useCartNotification = () => {
  const [notification, setNotification] = useState({
    message: '',
    type: '',
    isVisible: false
  });

  const showNotification = useCallback((message, type = 'success') => {
    setNotification({
      message,
      type,
      isVisible: true
    });

    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }));
    }, 3000);
  }, []);

  const getSuccessMessage = useCallback(() => {
    const messages = [
      'Medaase! Item added to your basket! 🌟',
      'Ayekoo! Great choice! 🎉',
      'Mo! Added to your market basket! 💚',
      'Excellent pick from our farm! 🌾'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }, []);

  const getRemoveMessage = useCallback(() => {
    const messages = [
      'Item removed from basket',
      'Updated your market basket',
      'Basket has been updated'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }, []);

  const notifyAddToCart = useCallback(() => {
    showNotification(getSuccessMessage(), 'success');
  }, [getSuccessMessage, showNotification]);

  const notifyRemoveFromCart = useCallback(() => {
    showNotification(getRemoveMessage(), 'info');
  }, [getRemoveMessage, showNotification]);

  const NotificationComponent = useCallback(() => {
    if (!notification.isVisible) return null;

    const baseClasses = 'fixed bottom-4 right-4 p-4 rounded-lg shadow-lg transform transition-all duration-500 z-50';
    const typeClasses = {
      success: 'bg-ghana-green-500 text-white',
      error: 'bg-ghana-red-500 text-white',
      info: 'bg-ghana-gold-500 text-white'
    };

    return (
      <div className={`${baseClasses} ${typeClasses[notification.type]} animate-slide-up`}>
        {notification.message}
      </div>
    );
  }, [notification]);

  return {
    notification,
    showNotification,
    notifyAddToCart,
    notifyRemoveFromCart,
    NotificationComponent
  };
};