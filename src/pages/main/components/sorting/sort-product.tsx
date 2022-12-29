import { ProductsSorting, SortBlock, SortItems, SearchInput, FoundProducts, ButtonChangeCardLayout } from './sort-product.styled';
import { ProductsContext } from '../../../../context/products-context';
import { useContext, useMemo } from 'react';
import { useSearchParams, } from 'react-router-dom';

const SortProduct = () => {

  const [ searchParams, setSearchParams ] = useSearchParams();

  const { currentProducts } = useContext(ProductsContext);

  const NumOfProducts =  useMemo(
    () => currentProducts.length,
    [currentProducts]
  );

  const sortProducts = (event: React.MouseEvent<HTMLUListElement> & {target: HTMLUListElement}) => {
    const sortParam = event.target.id;
    searchParams.set('sort', sortParam);
    setSearchParams(searchParams);
  }

  const setSearchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchParam = event.target.value;
    if (event.target.value.length !== 0) {
      searchParams.set('search', searchParam);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  }

  const changeCardLayoutSmall = () => {
    searchParams.set('big', 'false');
    setSearchParams(searchParams);
  }

  const changeCardLayoutBig = () => {
    searchParams.set('big', 'true');
    setSearchParams(searchParams);
  }

  return (
    <ProductsSorting>
      <SortBlock>
        Sort options
        <SortItems onClick={sortProducts}>
          <li id="priceAsc">Ascending price</li>
          <li id="priceDesc">Descending price</li>
          <li id="ratingAsc">Ascending rating</li>
          <li id="ratingDesc">Descending rating</li>
          <li id="discountAsc">Ascending discount</li>
          <li id="discountDesc">Descending discount</li>
        </SortItems>
      </SortBlock>
      <FoundProducts><span>Found:</span><span>{NumOfProducts}</span></FoundProducts>
      <SearchInput type="text" placeholder="Search product" onChange={setSearchProduct}></SearchInput>
      <ButtonChangeCardLayout onClick={changeCardLayoutSmall}></ButtonChangeCardLayout>
      <ButtonChangeCardLayout onClick={changeCardLayoutBig}></ButtonChangeCardLayout>
    </ProductsSorting>
  )
}

export default SortProduct;