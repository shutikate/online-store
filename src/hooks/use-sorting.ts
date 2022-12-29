import { useSearchParams, } from 'react-router-dom';
import { IProducts } from '../api/products';


const sortByPriceAsc = (products: Array<IProducts>) => {
  return products.sort((a, b) => a.price - b.price);
}

const sortByPriceDesc = (products: Array<IProducts>) => {
  return products.sort((a, b) => b.price - a.price);
}

const sortByRatingAsc = (products: Array<IProducts>) => {
  return products.sort((a, b) => a.rating - b.rating);
}

const sortByRatingDesc = (products: Array<IProducts>) => {
  return products.sort((a, b) => b.rating - a.rating);
}

const sortByDiscountAsc = (products: Array<IProducts>) => {
  return products.sort((a, b) => a.discountPercentage - b.discountPercentage);
}

const sortByDiscountDesc = (products: Array<IProducts>) => {
  return products.sort((a, b) => b.discountPercentage - a.discountPercentage);
}

const sortMatcher = {
  priceAsc: sortByPriceAsc,
  priceDesc: sortByPriceDesc,
  ratingAsc: sortByRatingAsc,
  ratingDesc: sortByRatingDesc,
  discountAsc: sortByDiscountAsc,
  discountDesc: sortByDiscountDesc
};

export const useSorting = (products: IProducts[]) => {
  const [ searchParams ] = useSearchParams();
  const sorting = searchParams.get('sort') || '';

  return sorting in sortMatcher ? sortMatcher[sorting as keyof typeof sortMatcher](products) : products;
};
