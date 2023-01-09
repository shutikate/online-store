import styled from "styled-components";
import { Link } from "react-router-dom";

// export const Wrapper = styled.div`
//   flex: 1 1 auto;
// `

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 70%;
  margin: 0 auto;
  border: 2px solid #000000;
`

export const NameProductWrapper = styled.div `
  width: 60%;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 1.4rem;
`

export const StoreLink = styled(Link)`
  text-decoration: none;
  color: rgba(74, 74, 74);
`

export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bolder;
  text-transform: uppercase;
`

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  padding: 0 10px;
`

export const AllImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  width: 25%;

  img {
    margin-bottom: 5px;
    width: 80%;
    cursor: pointer;
  }
`

export const BigImage = styled.div`

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  img {
    max-height: 50vh;
    width: auto;
    max-width: 100%;
    transition: all 0.5s;

    &:hover {
      position: absolute;
      transform: scale(1.4);
      z-index: 1;
    }
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  padding: 0 10px;
`

export const NameBlock = styled.div`
  width: 100%;
  padding: 5px 0;
  margin-bottom: 10px;
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
`

export const DescriptionBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
  width: 100%;
  font-size: 1.4rem;
`

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  align-items: center;
  justify-content: space-around;
`

export const Price = styled.div`
  font-size: 3.5rem;
`

export const EmptyProduct = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bolder;
`



