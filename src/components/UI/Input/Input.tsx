"use client";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classNames from "classnames";
import "./Input.scss";
import React from "react";
import { InputMask, Replacement } from "@react-input/mask";

interface IClasses {
  input?: string;
  wrapper?: string;
}

interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  classes?: IClasses;
  mask?: string;
  replacement?: string | Replacement;
  errorMessage?: string;
}

const Input: React.FC<IInputProps> = React.forwardRef(
  ({ classes, className, mask, replacement, errorMessage, ...otherProps }, ref) => {
    return (
      <div className={classNames("input-wrapper", classes?.wrapper)}>
        {mask ? (
          <InputMask
            ref={ref}
            mask={mask}
            replacement={replacement}
            className={classNames("input", `${classes?.input}`)}
            {...otherProps}
          />
        ) : (
          <input
            ref={ref}
            className={classNames("input", `${classes?.input || className}`, `${errorMessage && "input--error"}`)}
            {...otherProps}
          />
        )}
        {errorMessage && <div className="input-wrapper__error">{errorMessage}</div>}
      </div>
    );
  }
);

export default Input;
