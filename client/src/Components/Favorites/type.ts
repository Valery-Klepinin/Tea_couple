import { Product } from '../../features/products/types/types';

export type State = {
  favorites: FavoriteProduct[];
  error: string | undefined;
};

export type FavoriteProduct = {
  id: number;
  user_id: number;
  product_id: number;
  Product: Product;
};
