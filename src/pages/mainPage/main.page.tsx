import { Fragment } from "react";
import ProductsList from './products/productsList.component';
import SortProduct from './filters/sortProduct.component';
import { MainPageStyle } from './main.styles';

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
