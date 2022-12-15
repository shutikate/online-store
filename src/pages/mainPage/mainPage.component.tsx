import { Fragment } from "react";
import Products from './products/products.component';

const MainPage = () => {
  //const elements: number[] = Array.from(Array(10).keys());
  return (
    <Fragment>
      <Products />
    </Fragment>
  );
};

export default MainPage;
