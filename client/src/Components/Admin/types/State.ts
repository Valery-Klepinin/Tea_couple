import { Lesson, News, Product } from './types';

export type State = {
  products: Product[];
  news: News[];
  lessons: Lesson[];
  error: undefined | string;
};
