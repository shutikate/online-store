import { ProductsSorting, SortBlock, SortItems, SearchInput, FoundProducts } from './sort-product.styled';

const SortProduct = () => {
  // const [ , setSearchParams ] = useSearchParams();

  // const onClick = () => {
  //   setSearchParams({hello: ['world', 'ws']})
  // }

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
      <FoundProducts><span>Found:</span><span> 100</span></FoundProducts>
      <SearchInput type="text" placeholder="Search product"></SearchInput>
      <div></div>
      <div></div>
    </ProductsSorting>
  )
}

export default SortProduct;