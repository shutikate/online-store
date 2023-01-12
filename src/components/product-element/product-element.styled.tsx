import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductElementContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(74, 74, 74);
  border: 2px solid #000000;
  overflow: hidden;

  p {
    margin: 0 5px;
  }

  img {
    width: 100%;
    height: 155px;
    margin-bottom: 10px;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ProductLink = styled(Link)`
  width: 100%;
  overflow: hidden;
  text-decoration: none;
  color: rgba(74, 74, 74)
`

export const ImgWrapper = styled.div`
  margin-right: 10px;
  width: 100%;
  overflow: hidden;
`

export const PriceWrapper = styled.div`
  width: 100%;
  height: 45px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: #ffffff;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.4rem;

  img {
    flex-basis: 50%;
  }
`

export const DescriptionText = styled.div`
  flex-basis: 50%;
  flex-shrink: 0;
`
