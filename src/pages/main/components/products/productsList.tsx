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
        <ProductElement key={product.id} {...product} />
        )
      }
    </ProductElementWrapper>
  )
}

export default ProductsList;