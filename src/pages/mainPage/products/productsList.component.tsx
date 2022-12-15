import { useContext } from "react";
import { ProductElementWrapper } from "./productsList.component.style";
import ProductElement from "../../../components/product-element/product-element.component";
import { ProductsContext } from '../../../context/productsContext';

const ProductsList = () => {
  const products = useContext(ProductsContext);

  return (
    <ProductElementWrapper>
      {
        products.map((product) => <ProductElement title ={product.title} price={product.price} thumbnail={product.thumbnail} id={product.id} key={product.id}/>)
      }
    </ProductElementWrapper>
  )
}

export default ProductsList;