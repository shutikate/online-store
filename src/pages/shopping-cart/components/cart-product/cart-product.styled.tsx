import styled from "styled-components";

export const CartProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(74, 74, 74);
  overflow: hidden;
  border-bottom: 1px solid black;

  div {
    width: 100%;
    height: 70px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    font-size: 12px;
    background-color: #ffffff;
  }

  p {
    margin: 0 5px;
  }

  img {
    height: 100px;
    margin-bottom: 10px;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
