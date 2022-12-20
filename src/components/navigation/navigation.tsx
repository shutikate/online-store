import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon";
//import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
  LogoText,
} from "./navigation.styled";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <LogoText>Online-Shop</LogoText>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shopcart">Shopping cart</NavLink>
          <CartIcon></CartIcon>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
