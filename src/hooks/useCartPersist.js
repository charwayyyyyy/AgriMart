import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../redux/features/cartSlice';

export const useCartPersist = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // loading cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('agrimart-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // add each item individually to maintain cart state consistency
        parsedCart.forEach(item => {
          dispatch(addToCart(item));
        });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        localStorage.removeItem('agrimart-cart');
      }
    }
  }, [dispatch]);

  // save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('agrimart-cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartItems]);

  return null; 
};