import { useState, useEffect } from 'react';
import { IProducts, getAllProducts } from '../api/products';

export const useGetProducts = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect (() => {
    getAllProducts()
      .then(products => setProducts(products));
  }, []);

  return products;
};
