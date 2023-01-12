import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 4rem;
  padding: 0 2rem 0 2rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0);
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const SmallButton = styled.button`
  min-width: 3rem;
  width: auto;
  height: 3rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0);
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

