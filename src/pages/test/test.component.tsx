import { Fragment } from "react";
import { ProductElementWrapper } from "./test.styles";
import ProductElement from "../../components/product-element/product-element.component";
import SortButtons from "../../components/sort-buttons/sort-buttons.component";
const Test = () => {
  //const elements: number[] = Array.from(Array(10).keys());
  return (
    <Fragment>
      <SortButtons></SortButtons>
      <ProductElementWrapper>
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
      </ProductElementWrapper>
    </Fragment>
  );
};

export default Test;
