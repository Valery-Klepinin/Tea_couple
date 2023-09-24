import { News } from './types';

export type State = {
  newses: News[];
  error: undefined | string;
};
