import { FilterWrapper, NameFiltersBlock, ButtonWrapper } from './filter-products.styled';
import FilterPrice from './filter-price';
import FilterStock from './filter-stock';
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
    </FilterWrapper>
  )
}

export default FilterProduct;