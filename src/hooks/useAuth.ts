import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = (): AuthState & { logout: () => void } => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setState({ user: JSON.parse(stored), isAuthenticated: true, isLoading: false });
    } else {
      setState((s) => ({ ...s, isLoading: false }));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setState({ user: null, isAuthenticated: false, isLoading: false });
  };

  return { ...state, logout };
};

export const useHasRole = (role: string): boolean => {
  const { user } = useAuth();
  return user?.roles.includes(role) ?? false;
};
