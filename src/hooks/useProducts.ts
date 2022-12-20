import { useState, useEffect } from 'react';
import { IProducts, getAllProducts } from '../api/products';
import { useFilters } from './useFilters';

export const useProducts = () => {
  const [allProducts, setProducts] = useState<IProducts[]>([]);
  const [productsIdForCart, setCartIdProducts] = useState<number[]>([]);
  const currentProducts = useFilters(allProducts);

  const addProductIdToCart = (id: number) => {
    setCartIdProducts([...productsIdForCart, id]);
  }

  useEffect (() => {
    getAllProducts()
      .then(products => setProducts(products));
  }, []);

  return {allProducts, currentProducts, productsIdForCart, cartProducts: [], addProductIdToCart };
};
