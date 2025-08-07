import { cookies } from 'next/headers';
import { authenticate } from '@/services/authService';

// Login API route
export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;
    
    // Authenticate user
    const user = authenticate(username, password);
    
    if (!user) {
      return Response.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }
    
    // Set authentication cookie
    const cookieStore = cookies();
    cookieStore.set('auth-token', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      sameSite: 'strict',
    });
    
    return Response.json({ success: true, user });
  } catch (error) {
    console.error('Login error:', error);
    return Response.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

// Logout API route
export async function DELETE() {
  try {
    const cookieStore = cookies();
    cookieStore.delete('auth-token');
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return Response.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}