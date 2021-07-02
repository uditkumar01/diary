import { ReactNode } from "react";

export interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
