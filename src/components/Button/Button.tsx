import "./Button.css";
import { ButtonProps } from "./Button.types";

export function Button({
  children,
  className,
  variant,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`button ${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
