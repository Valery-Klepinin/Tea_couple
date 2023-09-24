/* eslint-disable import/prefer-default-export */

import {
  Lesson,
  LessonId,
  News,
  NewsId,
  Product,
  ProductId,
} from './types/types';

// Get___________________________________________________________
export const loadProductsFetch = async (): Promise<Product[]> => {
  const res = await fetch('/api/admin/products');
  const data = await res.json();
  return data;
};
export const loadNewsFetch = async (): Promise<News[]> => {
  const res = await fetch('/api/admin/news');
  const data = await res.json();
  return data;
};
export const loadLessonsFetch = async (): Promise<Lesson[]> => {
  const res = await fetch('/api/admin/lessons');
  const data = await res.json();
  return data;
};

// Delete___________________________________________________________
export const deleteProductsFetch = async (
  id: ProductId
): Promise<ProductId> => {
  const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
  const data = await res.json();
  return data;
};
export const deleteNewsFetch = async (id: NewsId): Promise<NewsId> => {
  const res = await fetch(`/api/admin/news/${id}`, { method: 'DELETE' });
  const data = await res.json();
  return data;
};
export const deleteLessonsFetch = async (id: LessonId): Promise<LessonId> => {
  const res = await fetch(`/api/admin/lessons/${id}`, { method: 'DELETE' });
  const data = await res.json();
  return data;
};

// Post___________________________________________________________
export const addProductFetch = async (formData: FormData): Promise<Product> => {
  const res = await fetch('/api/admin/products', {
    method: 'POST',
    body: formData,
  });
  return res.json();
};
export const addNewsFetch = async (formData: FormData): Promise<News> => {
  const res = await fetch('/api/admin/news', {
    method: 'POST',
    body: formData,
  });
  return res.json();
};

export const addLessonFetch = async (lesson: Lesson): Promise<Lesson> => {
  const res = await fetch('/api/admin/lessons', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(lesson),
  });
  return res.json();
};
