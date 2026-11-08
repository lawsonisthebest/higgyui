import type { ComponentProps } from "react";
import { LoaderCircle } from "lucide-react";

export type SpinnerProps = Omit<ComponentProps<"span">, "children"> & {
  label?: string;
  size?: number;
};

export const Spinner = ({
  label = "Loading",
  size = 19,
  className = "",
  ...props
}: SpinnerProps) => (
  <span role="status" {...props} className={`inline-flex text-neutral-600 ${className}`}>
    <LoaderCircle aria-hidden="true" size={size} strokeWidth={1.8} className="motion-safe:animate-spin" />
    <span className="sr-only">{label}</span>
  </span>
);
