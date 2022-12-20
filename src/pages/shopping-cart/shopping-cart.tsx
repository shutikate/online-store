import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./shopping-cart.styled";


import { ProductsContext } from '../../context/products-context';
import { useContext } from "react";
const ShoppingCart = () => {

  const { productsIdForCart } = useContext(ProductsContext);
  console.log(productsIdForCart);


  
  const cartTotal = 0;

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default ShoppingCart;
