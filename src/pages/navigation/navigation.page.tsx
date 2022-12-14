import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
//import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
  LogoText,
} from "./navigation.styles";

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
