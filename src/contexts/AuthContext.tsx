import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { IUser } from '../types';
import { authService } from '../services/auth';

interface AuthContextData {
  user: IUser | null;
  signed: boolean;
  login: (user: IUser) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const loadStorageData = () => {
      const storedUser = authService.getUser();
      if (storedUser) {
        setUser(storedUser);
      }
    };

    loadStorageData();
  }, []);

  const login = (userData: IUser) => {
    authService.setUser(userData);
    setUser(userData);
  };

  const logout = () => {
    authService.removeUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
