import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 1.4rem;
`

export const Input = styled.input`
  -webkit-appearance: none;
  -mox-appearance: none;
  appearance: none;
  position: absolute;

  &:checked + Label:before {
    background-color: #000000;
    border-color: rgba(74, 74, 74);
  }

  &:checked + Label:after {
    opacity: 1;
  }
`

export const Label = styled.label`
  padding-left: 25px;
  font-size: 1.8rem;
  color: rgba(74, 74, 74);
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid #cccccc;
    background-color: #ffffff;
    border-radius: 3px;
    position: absolute;
    top: 1px;
    left: 0;
    z-index: 1;
    transition: background .1s linear, border .1s linear;
  }

  &:after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background: url(https://htmlbase.ru/storage/app/media/checkbox/check.svg) no-repeat;
    background-size: 12px 12px;
    opacity: 0;
    position: absolute;
    top: 4px;
    left: 3px;
    z-index: 2;
    transition: opacity .1s linear;
  }
`

export const NumberOfProducts = styled.div`
  font-size: 1.8rem;
  margin-right: 10px;
`

