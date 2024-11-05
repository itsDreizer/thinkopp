import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import "./Button.scss";
import classNames from "classnames";

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({ children, type = "button", className, ...otherProps }) => {
  return (
    <button className={classNames("button", className)} type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
