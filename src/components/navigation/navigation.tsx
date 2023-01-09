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
  RSSchoolIcon,
  GithubIcon,
  FooterText,
  Footer,
  Container,
  MainContainer
} from "./navigation.styled";

const Navigation = () => {

  const { cartTotal } = useContext(ProductsContext);

  return (
    <Container>
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
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer>
        <a href="https://rs.school/js/">
          <RSSchoolIcon></RSSchoolIcon>
        </a>
        <FooterText>2022</FooterText>
        <a href="https://github.com/shutikate">
          <GithubIcon></GithubIcon>
        </a>
      </Footer>
    </Container>
  );
};

export default Navigation;
