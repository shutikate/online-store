import { useMemo } from 'react';
import { useSearchParams, } from 'react-router-dom';
import { IProducts } from '../api/products';

const makeUnique = (paramsKeys: string[]) =>
  paramsKeys.filter((param, index, arr) => arr.indexOf(param) === index);

const filterByCategories = (product: IProducts, params: string[]) => {
  return params.some((param) => param === product.category);
};

const filterByBrands = (product: IProducts, params: string[]) => {
  return params.some((param) => param === product.brand);
}

const filterByPrice = (product: IProducts, params: string[]) => {
  console.log(params);
  if (params.length === 1) {
    return product.price === Number(params[0]);
  } else {
    const paramsSort = params.sort((a, b) => Number(a) - Number(b));
    return (product.price > Number(paramsSort[0]) && product.price < Number(paramsSort[1]));
  }
};

const filterBySearch = (product: IProducts, params: string[]) => {
  return (product.title.toLowerCase()).includes(params[0].toLowerCase());
};

const filterMatcher = {
  category: filterByCategories,
  brand: filterByBrands,
  price: filterByPrice,
  search: filterBySearch
};

export const useFilters = (products: IProducts[]) => {
  const [ searchParams ] = useSearchParams();

  const filteredProducts = useMemo(() => {
    const paramKeys = makeUnique([...searchParams.keys()]);

    return products.filter(product =>
      paramKeys.every(param =>
        !(param in filterMatcher) ||
        filterMatcher[param as keyof typeof filterMatcher](product, searchParams.getAll(param))
      )
    );
  }, [products, searchParams.toString()])

  return filteredProducts;
}