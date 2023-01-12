import { FC, ButtonHTMLAttributes } from "react";
import { BaseButton, InvertedButton, SmallButton } from "./buttons.styled";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  inverted = "inverted",
  small = "small",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.small]: SmallButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, ...rest }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...rest}>{children}</CustomButton>;
};

export default Button;

