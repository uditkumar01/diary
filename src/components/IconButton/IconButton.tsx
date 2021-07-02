import "./IconButton.css";
import { IconButtonProps } from "./IconButton.types";

export function IconButton({
  children,
  className,
  handleClick,
}: IconButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`icon-button ${className || ""}`}
    >
      {children}
    </button>
  );
}
