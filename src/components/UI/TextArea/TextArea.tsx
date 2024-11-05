import React, { forwardRef, TextareaHTMLAttributes } from "react";
import "./TextArea.scss";
import classNames from "classnames";

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<ITextAreaProps> = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ className, ...otherProps }, ref) => {
    return <textarea ref={ref} {...otherProps} className={classNames(`textarea`, className)} />;
  }
);

export default TextArea;
