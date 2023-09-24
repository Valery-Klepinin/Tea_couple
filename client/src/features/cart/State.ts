import { OrderItem } from './types/types';

export type State = {
  orderitems: OrderItem[];
  error: undefined | string;
};
