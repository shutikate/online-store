import { Fragment } from "react";
import ProductsList from './components/products/products-list';
import SortProduct from './components/sorting/sort-product';
import { MainPageStyle } from './main.styled';

const MainPage = () => {
  return (
    <Fragment>
      <MainPageStyle>
        <SortProduct />
        <ProductsList />
      </MainPageStyle>
    </Fragment>
  );
};

export default MainPage;
