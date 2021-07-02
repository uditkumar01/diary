import "./IconButton.css";
import { IconButtonProps } from "./IconButton.types";

export function IconButton({
  children,
  className,
  onClick,
}: IconButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`icon-button ${className}`}
    >
      {children}
    </button>
  );
}
