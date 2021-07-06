import "./Button.css";
import { ButtonProps } from "./Button.types";

export function Button({
  children,
  className,
  variant,
  onClick,
  type,
}: ButtonProps): JSX.Element {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || "button"}
      className={`button ${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
