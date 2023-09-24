export type Lesson = {
  id?: number;
  title: string;
  description: string;
  video: string;
};

export type LessonId = Lesson['id'];

export type News = {
  id: number;
  title: string;
  description: string;
  img: string;
};

export type NewsId = News['id'];

export type Product = {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  admin_id: number;
  subCategory_id: number;
  raiting: number;
  availability: boolean;
};

export type ProductWithoutId = Omit<Product, 'id'>;

export type ProductId = Product['id'];
