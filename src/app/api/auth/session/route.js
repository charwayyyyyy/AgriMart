import { cookies } from 'next/headers';
import { findUserById } from '@/services/authService';

// Get current session
export async function GET() {
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get('auth-token');
    
    if (!authToken) {
      return Response.json({ isAuthenticated: false, user: null });
    }
    
    const userId = authToken.value;
    const user = findUserById(userId);
    
    if (!user) {
      // Invalid token, clear it
      cookieStore.delete('auth-token');
      return Response.json({ isAuthenticated: false, user: null });
    }
    
    return Response.json({
      isAuthenticated: true,
      user
    });
  } catch (error) {
    console.error('Session check error:', error);
    return Response.json(
      { error: 'Session check failed', isAuthenticated: false, user: null },
      { status: 500 }
    );
  }
}