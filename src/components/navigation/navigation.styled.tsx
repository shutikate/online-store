import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 2px solid #000000;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  margin-left: 50px;
  text-decoration: none;
`;

export const LogoText = styled.h1`
  color: rgba(74, 74, 74);
  font-size: 2rem;
  text-transform: uppercase;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.6rem;
  font-weight: bolder;
  text-transform: uppercase;
`;

export const NavLink = styled(Link)`
  margin:0 30px;
  cursor: pointer;
`

export const TotalCartText = styled.span`
  margin-right: 10px;
`
