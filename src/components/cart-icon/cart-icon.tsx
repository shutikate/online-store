import { useContext } from 'react';
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styled";
import { ProductsContext } from '../../context/products-context';

const CartIcon = () => {
  const { cartProducts } = useContext(ProductsContext);
  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartProducts.length}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
