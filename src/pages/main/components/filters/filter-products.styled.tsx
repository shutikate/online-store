import styled from "styled-components";

export const FilterWrapper = styled.div`
  padding: 0 30px;
  flex-basis: 30%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`

export const NameFiltersBlock = styled.div`
  width: 100%;
  padding: 5px 0;
  margin-bottom: 20px;
  background-color: #000000;
  color: #ffffff;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
`

export const ButtonWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  height: 260px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    background-color: rgba(189, 195, 199, 0.6);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0);
  }
`

