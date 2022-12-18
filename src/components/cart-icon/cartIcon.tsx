import { ShoppingIcon, CartIconContainer, ItemCount } from "./cartIcon.styled";
const CartIcon = () => {
  //const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const cartCount = 0;
  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
