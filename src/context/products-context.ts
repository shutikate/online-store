import React from 'react';
import { IProducts } from '../api/products';

interface productsData {
  allProducts: IProducts[],
  currentProducts: IProducts[],
  productsIdForCart: number[],
  cartProducts: IProducts[]
  addProductIdToCart: (id: number) => void,
  usedFilter: string,
  updateUsedFilter: (filter: string) => void,
}

export const ProductsContext = React.createContext<productsData>({
  allProducts: [],
  currentProducts: [],
  productsIdForCart: [],
  cartProducts: [],
  usedFilter: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateUsedFilter: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addProductIdToCart: () => {},
});
