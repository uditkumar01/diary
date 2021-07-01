import "./IconButton.css";
import { IconButtonProps } from "./IconButton.types";

export function IconButton({
  children,
  className,
  handleClick,
}: IconButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`icon-button ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}
