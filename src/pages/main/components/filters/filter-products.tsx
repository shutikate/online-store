import { FilterWrapper, NameFiltersBlock, ButtonWrapper, ProductsWrapper } from './filter-products.styled';
import FilterPrice from './filter-price';
import FilterStock from './filter-stock';
import FilterBrands from './filter-brands';
import FilterCategory from './filter-category';
import Button from '../../../../components/buttons/buttons';

const FilterProduct = () => {

  return (
    <FilterWrapper>
      <ButtonWrapper>
        <Button>Reset filters</Button>
        <Button>Copy Link</Button>
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