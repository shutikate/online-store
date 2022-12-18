import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 10px 0;
  font-size: 1.6rem;
  color: rgba(74, 74, 74);
  border: none;
  background-color: rgba(148, 145, 145, 0.6);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(201, 195, 195, 0.6);
  }
`