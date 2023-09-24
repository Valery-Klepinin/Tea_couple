import { FavoriteProduct } from './type';

export const initFavoriteFetch = async (): Promise<FavoriteProduct[]> => {
  const res = await fetch('/api/favorites');
  const data = await res.json();
  return data;
};

export const addFavoriteFetch = async (
  id: number,
): Promise<FavoriteProduct[]> => {
  const res = await fetch('/api/favorites', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return data;
};

export const delFavoriteFetch = async (
  id: number,
): Promise<FavoriteProduct> => {
  const res = await fetch(`/api/favorites/${id}`, {
    method: 'delete',
  });
  const data = await res.json();
  return data;
};

export default addFavoriteFetch;
