// Types
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonType = 'button' | 'submit' | 'reset';

// Interfaces para componentes
export interface IButton {
  title: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  type?: ButtonType;
}

export interface IInput {
  leftIcon?: React.ReactNode;
  name: string;
  control: any;
  rules?: any;
  type?: string;
  placeholder?: string;
}

export interface IHeader {
  autenticado?: boolean;
}

export interface IUserInfo {
  nome: string;
  image: string;
  percentual: number;
}

export interface IColumn {
  flex?: number;
}

// Interfaces para formulários
export interface IFormData {
  email: string;
  senha: string;
}

export interface ICadastroFormData extends IFormData {
  nome: string;
}

// Interface para usuários
export interface IUser {
  id?: string;
  nome: string;
  email: string;
  senha: string;
  image?: string;
}
