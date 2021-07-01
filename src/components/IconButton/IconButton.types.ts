import { ReactNode } from "react";

export interface IconButtonProps {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
}
