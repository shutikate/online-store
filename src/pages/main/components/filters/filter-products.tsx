import { FilterWrapper, NameFiltersBlock, ButtonWrapper, ProductsWrapper } from './filter-products.styled';
import FilterPrice from './filter-price';
import FilterStock from './filter-stock';
import FilterBrands from './filter-brands';
import FilterCategory from './filter-category';
import Button from '../../../../components/buttons/buttons';
import { useSearchParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ProductsContext } from '../../../../context/products-context';

const FilterProduct = () => {

  const [ searchParams, setSearchParams ] = useSearchParams();
  const { updateUsedFilter } = useContext(ProductsContext);
  const [ copyText, setCopyText ] = useState('Copy Link');

  const resetFilters = () => {
    updateUsedFilter('');
    const allSearchParams = [...searchParams.keys()];
    allSearchParams.forEach((param) => {
      searchParams.delete(param);
    })
    setSearchParams(searchParams);
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyText('Copied!');
    setTimeout(() => {setCopyText('Copy Link')}, 1500);
  }

  return (
    <FilterWrapper>
      <ButtonWrapper>
        <Button onClick={resetFilters}>Reset filters</Button>
        <Button onClick={copyLink}>{copyText}</Button>
      </ButtonWrapper>
      <NameFiltersBlock>Price</NameFiltersBlock>
      <FilterPrice />
      <NameFiltersBlock>Stock</NameFiltersBlock>
      <FilterStock />
      <NameFiltersBlock>Category</NameFiltersBlock>
      <ProductsWrapper>
        <FilterCategory />
      </ProductsWrapper>
      <NameFiltersBlock>Brand</NameFiltersBlock>
      <ProductsWrapper>
        <FilterBrands />
      </ProductsWrapper>
    </FilterWrapper>
  )
}

export default FilterProduct;