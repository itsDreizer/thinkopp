import classNames from "classnames";
import "./Label.scss";
interface ILabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  text: string;
  isError?: boolean;
}

const Label: React.FC<ILabelProps> = ({ children, text, isError, className }) => {
  return (
    <label className={classNames("label", className)}>
      <span className={classNames("label__text", `${isError && "label__text--color-red"}`)}>{text}</span>
      {children}
    </label>
  );
};

export default Label;
