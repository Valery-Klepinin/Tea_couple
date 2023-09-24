export type AuthUser = {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  phone: number;
  isAdmin?: boolean;
  city: string;
  street: string;
  house: string;
};

export type UserPassAndEmail = {
  email: string;
  password: string;
};