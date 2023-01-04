import styled, {css} from "styled-components"

export const ProductsSorting = styled.div`
  position: relative;
  padding: 0 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`

export const SortBlock = styled.div`
  min-width: 16.5rem;
  width: auto;
  height: 4rem;
  padding: 0 2rem 0 2rem;
  font-size: 1rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    ul {
      transform: translateY(-25px);
      color: black;
      text-transform: none;
    }
  }
`

export const SortItems = styled.ul`
  position: absolute;
  width: 250px;
  padding: 20px;
  top: 25px;
  left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
  font-size: 1.8rem;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 1;
  transform: translateY(-500px);
  transition: all 0.6s;

  li {
    list-style: none;
    cursor: pointer;
    height: 40px;
    transition: all 0.5s;

    &:hover {
      font-size: 2rem;
    }
  }
`

export const FoundProducts = styled.div`
  display: flex;
  font-size: 2rem;
  color: rgba(74, 74, 74);

  span {
    margin-right: 10px;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: bolder;
  }
`

export const SearchInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
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

export const ButtonChangeCardLayout = styled.div<{active?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-bottom: 2px solid #000000;
  font-size: 2rem;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background: rgba(189, 195, 199, 0.6);
    `};
`