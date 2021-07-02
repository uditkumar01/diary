import "./Button.css";
import { ButtonProps } from "./Button.types";

export function Button({ children, variant }: ButtonProps): JSX.Element {
  return (
    <button type="button" className={`button ${variant}`}>
      {children}
    </button>
  );
}
