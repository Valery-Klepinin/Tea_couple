import { Product, Service, Tea } from './types';

export type State = {
  products: Product[];
  teas: Tea[];
  services: Service[];
  error: undefined | string;
  searchQuery: string;
};
