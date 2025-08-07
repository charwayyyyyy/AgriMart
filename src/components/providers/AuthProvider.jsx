'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '@/redux/features/authSlice';

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user is authenticated on page load
    const checkSession = async () => {
      try {
        const response = await fetch('/api/auth/session');
        const data = await response.json();

        if (data.isAuthenticated && data.user) {
          dispatch(loginSuccess(data.user));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error('Session check error:', error);
        dispatch(logout());
      }
    };

    checkSession();
  }, [dispatch]);

  return children;
}