import { Outlet } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import { useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
  LogoText,
  TotalCartText,
} from "./navigation.styled";

const Navigation = () => {

  const { cartTotal } = useContext(ProductsContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <LogoText>Online-Shop</LogoText>
        </LogoContainer>
        <NavLinks>
          <TotalCartText>Cart total:</TotalCartText>
          <span>{cartTotal}$</span>
          <NavLink to="/shopcart">
            <CartIcon></CartIcon>
          </NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
