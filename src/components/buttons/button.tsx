import { ButtonStyled } from './button.styled';
import { FC } from 'react';

type Button = {
  text: string;
}

const Button: FC<Button> = (props) => {
  return (
    <ButtonStyled>{props.text}</ButtonStyled>
  )
}

export default Button;