import { ProductsSorting, SortBlock, SortItems, SearchInput } from './sortProduct.component.styles';

const SortProduct = () => {
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
      <div><span>Found:</span><span> 100</span></div>
      <SearchInput type="text" placeholder="Search product"></SearchInput>
      <div></div>
      <div></div>
    </ProductsSorting>
  )
}

export default SortProduct;