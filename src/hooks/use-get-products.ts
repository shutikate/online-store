import { useState, useEffect } from 'react';
import { IProducts, getAllProducts } from '../api/products';
import { useFilters } from './use-filters';

export const useGetProducts = () => {
  const [allProducts, setProducts] = useState<IProducts[]>([]);
  const [productsIdForCart, setCartIdProducts] = useState<number[]>([]);
  const filteresData = useFilters(allProducts);

  const addProductIdToCart = (id: number) => {
    setCartIdProducts([...productsIdForCart, id]);
  }

  useEffect (() => {
    getAllProducts()
      .then(products => setProducts(products));
  }, []);

  return {...filteresData, allProducts, productsIdForCart, cartProducts: [], addProductIdToCart };
};
