import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const NotFoundHeading = styled.h2`
  font-size: 5rem;
  font-color: black;
`;
export const NotFoundText = styled.span`
  font-size: 2rem;
  font-color: black;
`;

export const LinkToMain = styled(Link)`
  font-size: 2rem;
  font-color: blue;
`;
