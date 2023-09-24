import { Lesson } from './types';

export type State = {
  lessons: Lesson[];
  error: undefined | string;
};
