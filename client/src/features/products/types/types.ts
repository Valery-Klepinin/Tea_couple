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

export type Tea = {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
};
export type Service = {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
};
