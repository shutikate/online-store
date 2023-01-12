import { FC } from 'react';
import {
  SliderWrapper,
  InputRange,
  SliderTrack,
  InputValues,
  SliderContainer
} from "./range-slider.styled";

interface Value {
  valueMin: number;
  valueMax: number;
  rangePriceMin: number;
  rangePriceMax: number;
  onChangeFirst: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSecond: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeSlider: FC<Value> = ({valueMin, valueMax, onChangeFirst, onChangeSecond, rangePriceMin, rangePriceMax}) => {
    return (
      <SliderWrapper>
        <InputValues>
          <span>{rangePriceMin}</span>
          <span>⟷</span>
          <span>{rangePriceMax}</span>
        </InputValues>
        <SliderContainer>
          <SliderTrack></SliderTrack>
          <InputRange
            type="range"
            min={valueMin}
            max={valueMax}
            value={rangePriceMin}
            onChange={onChangeFirst}>
          </InputRange>
          <InputRange
            type="range"
            min={valueMin}
            max={valueMax}
            value={rangePriceMax}
            onChange={onChangeSecond}>
          </InputRange>
        </SliderContainer>
      </SliderWrapper>
    )
}

export default RangeSlider;