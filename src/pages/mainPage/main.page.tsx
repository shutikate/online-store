import { Fragment } from "react";
import ProductsList from './components/products/productsList';
import SortProduct from './components/sorting/sortProduct';
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
