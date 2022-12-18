import { useContext } from "react";
import { ProductElementWrapper } from "./productsList.styled";
import ProductElement from "../../../../components/product-element/productElement";
import { ProductsContext } from '../../../../context/productsContext';

const ProductsList = () => {
  const { currentProducts } = useContext(ProductsContext);

  return (
    <ProductElementWrapper>
      {
        currentProducts.map((product) =>
        <ProductElement title ={product.title} price={product.price} thumbnail={product.thumbnail} id={product.id} key={product.id}/>
        )
      }
    </ProductElementWrapper>
  )
}

export default ProductsList;