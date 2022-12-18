import React from 'react';
import { IProducts } from '../api/products';

interface productsData {
  allProducts: IProducts[],
  currentProducts: IProducts[],
  productsIdForCart: number[],
  cartProducts: IProducts[]
}

export const ProductsContext = React.createContext<productsData>({
  allProducts: [],
  currentProducts: [],
  productsIdForCart: [],
  cartProducts: []
});
