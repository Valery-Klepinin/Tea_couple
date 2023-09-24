import { Product } from '../../products/types/types';

export type OrderItem = {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  Product: Product;
};

export type DelItem = {
  id: string;
  message: string;
};

export type UpdItem = {
  id: number;
  quantity: number;
};
