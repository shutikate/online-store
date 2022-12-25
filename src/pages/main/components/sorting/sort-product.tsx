import { ProductsSorting, SortBlock, SortItems, SearchInput, FoundProducts } from './sort-product.styled';
import { ProductsContext } from '../../../../context/products-context';
import { useContext, useMemo } from 'react';

const SortProduct = () => {

  const { currentProducts } = useContext(ProductsContext);

  const NumOfProducts =  useMemo(
    () => currentProducts.length,
    [currentProducts]);

  return (
    <ProductsSorting>
      <SortBlock>
        Sort options
        <SortItems>
          <li>Ascending price</li>
          <li>Descending price</li>
          <li>Ascending rating</li>
          <li>Descending rating</li>
          <li>Ascending discount</li>
          <li>Descending discount</li>
        </SortItems>
      </SortBlock>
      <FoundProducts><span>Found:</span><span>{NumOfProducts}</span></FoundProducts>
      <SearchInput type="text" placeholder="Search product"></SearchInput>
      <div></div>
      <div></div>
    </ProductsSorting>
  )
}

export default SortProduct;