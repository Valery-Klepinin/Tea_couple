import { Product } from '../../features/products/types/types';

export const initProductsFetch = async (title: string): Promise<Product[]> => {
  const res = await fetch(`/api/category/${title}`);
  const data = await res.json();
  return data;
};
export const initOneProductFetch = async ({
  title,
  idProd,
}: {
  title: string;
  idProd: string;
}): Promise<Product> => {
  const res = await fetch(`/api/category/${title}/${idProd}`);
  const data = await res.json();
  return data;
};
