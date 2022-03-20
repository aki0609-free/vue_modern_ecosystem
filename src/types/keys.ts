import { InjectionKey } from 'vue';
import { Cart, Product } from './types';

type Auth = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthDefault: Auth = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
}

type Shopping = {
  products: Product[];
  cart: Cart;
  addProductToCart: (productData: Omit<Product, 'description'>) => void;
  removeProductFromCart: (productId: string) => void;
}

export const ShoppingDefault: Shopping = {
  products: [],
  cart: {} as Cart,
  addProductToCart: (productData: Omit<Product, 'description'>) => {},
  removeProductFromCart: (productId: string) => {},
}

export const AuthKey: InjectionKey<Auth> = Symbol('auth');
export const ShoppingKey: InjectionKey<Shopping> = Symbol('shopping');
