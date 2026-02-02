import { IUser } from '../types';

const AUTH_KEY = 'dio-react-auth';

export const authService = {
  // Salva usuário logado no localStorage
  setUser: (user: IUser) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  },

  // Recupera usuário logado
  getUser: (): IUser | null => {
    const user = localStorage.getItem(AUTH_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Remove usuário (logout)
  removeUser: () => {
    localStorage.removeItem(AUTH_KEY);
  },

  // Verifica se está autenticado
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(AUTH_KEY);
  }
};
