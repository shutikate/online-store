import styled from "styled-components";

export const CartProductContainer = styled.div`
  width: 100%;
  padding: 5px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(74, 74, 74);
  font-size: 1.6rem;
  border-bottom: 1px solid black;

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const ImgWrapper = styled.div`
  flex-basis: 30%;
  margin-bottom: 5px;
`

export const NumberWrapper = styled.p`
  margin: 0 20px 0 10px;
  font-weight: bolder;
`

export const CartDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NameProductWrapper = styled.p`
  border-bottom: 1px solid #000000;
  width: 90%;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
`

export const DescriptionOfProduct = styled.p`
  text-align: center;
  margin: 0 10px 10px;
`

export const RatingDiscountWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  width: 100%;
  font-weight: bolder;
`

export const ProductAmountInCart = styled.p`
  margin: 0 10px;
`

export const ButtonPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: bolder;
`

export const Price = styled.p`
  font-size: 1.8rem;
  font-weight: bolder;
`