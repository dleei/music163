import type { ReactNode } from "react";

declare global {
  interface IProps {
    children?: ReactNode;
  }
}
