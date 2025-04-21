export interface UserState {
  email: string | number;
  password: string | number;
  setEmail: (email: string | number) => void;
  setPassword: (password: string | number) => void;
}

export interface LoginParams {
  email: string | number;
  md5_password: string | number;
}
