import { useState, useEffect } from 'react';
import { User, AuthState } from '@/types/global';

export const useAuth = (): AuthState => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Simulate auth check
    const checkAuth = async () => {
      try {
        // In a real app, you would check for stored tokens, validate them, etc.
        const savedUser = await new Promise<User | null>((resolve) => {
          setTimeout(() => {
            // Mock user data for demo
            resolve({
              id: '1',
              name: 'John Doe',
              email: 'john.doe@example.com',
              avatar: 'https://via.placeholder.com/100',
            });
          }, 1000);
        });

        setAuthState({
          user: savedUser,
          isLoading: false,
          isAuthenticated: !!savedUser,
        });
      } catch {
        setAuthState({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        });
      }
    };

    checkAuth();
  }, []);

  return authState;
};
