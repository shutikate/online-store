import React from 'react';
import { IProducts } from '../api/products';

interface productsData {
  allProducts: IProducts[],
  currentProducts: IProducts[],
  productsIdForCart: number[],
  cartProducts: IProducts[]
  addProductIdToCart: (id: number) => void
}

export const ProductsContext = React.createContext<productsData>({
  allProducts: [],
  currentProducts: [],
  productsIdForCart: [],
  cartProducts: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addProductIdToCart: () => {},
});
