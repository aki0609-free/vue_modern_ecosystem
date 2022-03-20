export type Product = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export type Item = {
  productId: string;
  image: string;
  title: string;
  price: number;
  qty: number;
}

export type Cart = {
  items: Item[];
  total: 0;
  qty: 0;
}