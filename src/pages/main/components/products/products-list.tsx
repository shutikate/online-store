import { useContext } from "react";
import { ProductElementWrapper } from "./products-list.styled";
import ProductElement from "../../../../components/product-element/product-element";
import { ProductsContext } from '../../../../context/products-context';

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