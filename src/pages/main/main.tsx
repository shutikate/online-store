import { Fragment } from "react";
import ProductsList from './components/products/products-list';
import SortProduct from './components/sorting/sort-product';
import { MainPageStyle, ProductsSortWrapper } from './main.styled';
import FilterProduct from "./components/filters/filter-products";

const MainPage = () => {

  return (
    <Fragment>
      <MainPageStyle>
      <FilterProduct />
      <ProductsSortWrapper>
        <SortProduct />
        <ProductsList />
      </ProductsSortWrapper>
      </MainPageStyle>
    </Fragment>
  );
};

export default MainPage;
