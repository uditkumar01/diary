import "./Button.css";
import { ButtonProps } from "./Button.types";

export function Button({
  children,
  className,
  variant,
}: ButtonProps): JSX.Element {
  return (
    <button type="button" className={`button ${variant} ${className}`}>
      {children}
    </button>
  );
}
