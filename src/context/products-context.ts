/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { IProducts } from '../api/products';

interface productsData {
  allProducts: IProducts[],
  currentProducts: IProducts[],
  cartProducts: IProducts[],
  addProductIdToCart: (id: number) => void,
  dropProductFromCart: (id: number) => void,
  increaseProductAmount: (id: number) => void,
  decreaseProductAmount: (id: number) => void,
  getProductAmountInCart: (id: number) => number,
  clearCart: () => void,
  isProductInCart: (id?: number) => boolean,
  cartTotal: number,
  cartTotalAmount: number,
  usedFilter: string,
  updateUsedFilter: (filter: string) => void,
}

export const ProductsContext = React.createContext<productsData>({
  allProducts: [],
  currentProducts: [],
  cartProducts: [],
  usedFilter: '',
  updateUsedFilter: () => {},
  addProductIdToCart: () => {},
  dropProductFromCart: () => {},
  increaseProductAmount: () => {},
  decreaseProductAmount: () => {},
  clearCart: () => {},
  getProductAmountInCart: () => 0,
  cartTotal: 0,
  cartTotalAmount: 0,
  isProductInCart: () => false
});
