// This file is kept for compatibility with existing imports
// but the Firebase authentication has been replaced with a simple cookie-based auth system

// The actual authentication logic is now in /src/services/authService.js
// and the API routes in /src/app/api/auth/

export const auth = {
  // Dummy methods to prevent errors if any code still tries to use Firebase auth
  signOut: async () => Promise.resolve(),
  onAuthStateChanged: () => {
    // No-op function
    return () => {};
  }
};


