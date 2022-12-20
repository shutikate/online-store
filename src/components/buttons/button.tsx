import { ButtonStyled } from './button.styled';
import { FC } from 'react';

type Button = {
  text: string;
  onClick: () => void;
}

const Button: FC<Button> = (props) => {
  return (
    <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>
  )
}

export default Button;