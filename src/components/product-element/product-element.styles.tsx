import styled from "styled-components";

export const ProductElementContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(74, 74, 74);
  overflow: hidden;

  div {
    width: 100%;
    height: 45px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    font-size: 18px;
    background-color: #ffffff;
  }

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
