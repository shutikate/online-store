/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { IProducts } from '../api/products';

interface productsData {
  allProducts: IProducts[],
  currentProducts: IProducts[],
  cartProducts: IProducts[]
  addProductIdToCart: (id: number) => void,
  dropProductFromCart: (id: number) => void,
  increaseProductAmount: (id: number) => void,
  decreaseProductAmount: (id: number) => void,
  getProductAmountInCart: (id: number) => number,
  isProductInCart: (id?: number) => boolean,
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
  getProductAmountInCart: () => 0,
  isProductInCart: () => false
});
