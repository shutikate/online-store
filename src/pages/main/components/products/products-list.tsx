import { useContext } from "react";
import { ProductElementWrapper, ProductElementWrapperBig, ProductNotFoundWrapper } from "./products-list.styled";
import ProductElement from "../../../../components/product-element/product-element";
import ProductElementSecond from "../../../../components/product-element/product-element-second";
import { ProductsContext } from '../../../../context/products-context';
import { useSearchParams } from 'react-router-dom';

const ProductsList = () => {
  const { currentProducts } = useContext(ProductsContext);
  const [searchParams] = useSearchParams();

  return (
    currentProducts.length === 0
    ? <ProductNotFoundWrapper>Products not found, please select other search options</ProductNotFoundWrapper>
    :
    !searchParams.get('big') || searchParams.get('big') === 'false'
    ? <ProductElementWrapper>
      {
        currentProducts.map((product) =>
        <ProductElement key={product.id} {...product} />
        )
      }
      </ProductElementWrapper>
    : <ProductElementWrapperBig>
      {
        currentProducts.map((product) =>
        <ProductElementSecond key={product.id} {...product} />
        )
      }
      </ProductElementWrapperBig>

  )
}

export default ProductsList;