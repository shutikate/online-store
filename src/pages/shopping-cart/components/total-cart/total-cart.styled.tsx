import styled, {css} from "styled-components";

export const TotalCartContainer = styled.div`
  padding: 10px 20px;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
`

export const Summary = styled.p`
  width: 80%;
  padding: 7px 0 10px;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
  border-bottom: 2px solid black;
  text-align: center;
`

export const DescriptionText = styled.p<{active?: boolean}>`
  font-size: 1.8rem;
  margin-bottom: 20px;

  span {
    font-weight: bolder;
    margin-right: 10px;
    text-transform: uppercase;
  }

  ${props =>
    props.active &&
    css`
      text-decoration: line-through;
    `};
`

export const PromoInput = styled.input`
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid black;
  width: 300px;
  padding: 10px;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bolder;

  &:focus {
    outline: none;
    outline-bottom: black;
  }
`

export const TestPromocodes = styled.p`
  margin: 10px 0 20px;
`

export const CodeDescription = styled.p`
  font-size: 1.2rem;
  margin: 0 5px 5px 0;
`

export const PromoWrapper = styled.div`
  display: flex;
  align-items: center;

  Button {
    height: 20px;
    margin-bottom: 5px;
  }
`