import { AuthUser, UserPassAndEmail } from '../features/users/types/types';
import { Product, Service, Tea } from '../features/products/types/types';
import { News } from '../features/news/types';
import { Lesson } from '../features/lessons/types';
import { OrderItem } from '../features/cart/types/types';

// eslint-disable-next-line import/prefer-default-export
export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('/api/products');
  return res.json();
};

export const fetchCategoryTea = async (): Promise<Tea[]> => {
  const res = await fetch('/api/category/tea');
  return res.json();
};

export const fetchCategoryService = async (): Promise<Service[]> => {
  const res = await fetch('/api/category/service');
  return res.json();
};

export const fetchNews = async (): Promise<News[]> => {
  const res = await fetch('/api/news');
  const data = await res.json();
  return data;
};

export const fetchLessons = async (): Promise<Lesson[]> => {
  const res = await fetch('/api/lessons');
  const data = await res.json();
  return data;
};

export const fetchSignUp = async (user: AuthUser): Promise<AuthUser> => {
  const res = await fetch('/api/users/sign-up', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message);
  }
  return res.json();
};

export const fetchAuth = async (user: UserPassAndEmail): Promise<AuthUser> => {
  const res = await fetch('/api/users/auth', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message);
  }
  return res.json();
};

export const fetchCheckUser = async (): Promise<AuthUser> => {
  const res = await fetch('/api/users/check');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const fetchLogOut = async (): Promise<{ message: string }> => {
  const res = await fetch('/api/users/logout');
  return res.json();
};