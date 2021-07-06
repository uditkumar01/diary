import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  variant?: string;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}
