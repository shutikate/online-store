import { useContext } from 'react';
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styled";
import { ProductsContext } from '../../context/products-context';

const CartIcon = () => {
  const { cartTotalAmount } = useContext(ProductsContext);
  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartTotalAmount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
