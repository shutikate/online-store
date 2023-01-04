import { ProductsSorting,
        SortBlock,
        SortItems,
        SearchInput,
        FoundProducts,
        ButtonChangeCardLayout} from './sort-product.styled';
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
        {!searchParams.get('sort') ? 'Sort options' : searchParams.get('sort')}
        <SortItems onClick={sortProducts}>
          <li id="price-Asc">Ascending price</li>
          <li id="price-Desc">Descending price</li>
          <li id="rating-Asc">Ascending rating</li>
          <li id="rating-Desc">Descending rating</li>
          <li id="discount-Asc">Ascending discount</li>
          <li id="discount-Desc">Descending discount</li>
        </SortItems>
      </SortBlock>
      <FoundProducts><span>Found:</span><span>{NumOfProducts}</span></FoundProducts>
      <SearchInput type="text" placeholder="Search product" onChange={setSearchProduct} value={searchParams.get('search') ?? ''}></SearchInput>
      {searchParams.get('big') === 'false'
      ? <ButtonChangeCardLayout onClick={changeCardLayoutSmall} active>x 4</ButtonChangeCardLayout>
      : <ButtonChangeCardLayout onClick={changeCardLayoutSmall}>x 4</ButtonChangeCardLayout>}
      {searchParams.get('big') === 'true'
      ? <ButtonChangeCardLayout onClick={changeCardLayoutBig} active>x 2</ButtonChangeCardLayout>
      : <ButtonChangeCardLayout onClick={changeCardLayoutBig}>x 2</ButtonChangeCardLayout>}
    </ProductsSorting>
  )
}

export default SortProduct;