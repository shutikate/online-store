import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CheckoutContainer = styled.div`
  padding: 10px 20px;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 0 0 10px;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  font-weight: bolder;
  text-transform: uppercase;
  border-bottom: 2px solid black;
`;

export const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-right: 10px;
  }

  input {
    border: none;
    width: 40px;
    border-bottom: 1px solid black;

    &:focus{
      outline: none;
    }
  }
`;

export const NumberWrapper = styled.span`
  margin: 0 10px;
`

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const EmptyCart = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bolder;
`
