import styled from "styled-components";

export const ProductElementWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  gap: 1rem;
`

export const ProductElementWrapperBig = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  gap: 1rem;
`

export const ProductNotFoundWrapper = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 50px;
  text-align: center;
`
