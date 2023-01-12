import { useState, useEffect } from 'react';
import { IProducts, getAllProducts } from '../api/products';
import { useFilters } from './use-filters';
import { useCart } from './use-cart';
import { useSorting } from './use-sorting';

export const useGetProducts = () => {
  const [allProducts, setProducts] = useState<IProducts[]>([]);
  const { filteredProducts, ...filtersData } = useFilters(allProducts);
  const sortedProducts = useSorting(filteredProducts);
  const cartData = useCart(allProducts);

  useEffect (() => {
    getAllProducts()
      .then(products => setProducts(products));
  }, []);

  return {...filtersData, ...cartData, allProducts, currentProducts: sortedProducts };
};
