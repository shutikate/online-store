import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
`

export const InputRange = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: transparent;
  pointer-events: none;

    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 3px;
    }

    &::-moz-range-track {
      -moz-appearance: none;
      height: 3px;
    }

    &::-ms-track {
      appearance: none;
      height: 3px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 12px;
      width: 12px;
      background-color: rgba(0, 0, 0, 0.9);
      cursor: pointer;
      border-radius: 50%;
      margin-top: -4px;
      pointer-events: auto;
    }

    &::-moz-range-thumb {
      -moz-appearance: none;
      height: 12px;
      width: 12px;
      cursor: pointer;
      border-radius: 50%;
      background-color: #000000;
      margin-top: -4px;
      pointer-events: auto;
    }

    &::-ms-thumb {
      appearance: none;
      height: 12px;
      width: 12px;
      cursor: pointer;
      border-radius: 50%;
      background-color: #000000;
      margin-top: -4px;
      pointer-events: auto;
    }
`

export const SliderTrack = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d5d5d5;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 5px;
`

export const InputValues = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 20px;
  width: 80%;
  font-size: 2rem;
`