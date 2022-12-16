import styled from "styled-components"

export const ProductsSorting = styled.div`
  width: 60%;
  position: relative;
  padding: 0 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`

export const SortBlock = styled.div`
  padding: 10px 50px;
  font-size: 22px;
  background-color: rgba(201, 195, 195, 0.6);
  color: rgba(74,74,74);
  cursor: pointer;

  &:hover {
    ul {
      transform: translateY(-70px);
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
  height: 400px;
  font-size: 24px;
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
      font-size: 26px;
    }
  }
`

export const SearchInput = styled.input`
  border: none;
  border-bottom: 2px solid rgba(201, 195, 195);
  width: 300px;
  padding: 10px;
  font-size: 20px;

  &:focus {
    outline: none;
    outline-bottom: rgba(201, 195, 195);
    color: rgba(74,74,74);
  }
`
