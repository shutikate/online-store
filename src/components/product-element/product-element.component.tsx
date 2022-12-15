import { ProductElementContainer } from "./product-element.styles";
import ButtonComponent from "../buttons/button.component";

const ProductElement = () => {

  return (
    <ProductElementContainer>
      <div>
        <p>Iphone</p>
        <p>200$</p>
      </div>
      <img src= 'https://i.dummyjson.com/data/products/1/1.jpg' alt=""></img>
      <ButtonComponent />
    </ProductElementContainer>
  );
};

export default ProductElement;
