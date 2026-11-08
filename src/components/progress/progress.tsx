import type { ComponentProps } from "react";

export type ProgressProps = Omit<ComponentProps<"progress">, "children"> & {
  label: string;
};

export const Progress = ({ label, className = "", ...props }: ProgressProps) => (
  <progress
    aria-label={label}
    {...props}
    className={`block h-2 w-full overflow-hidden rounded-full bg-neutral-100 [&::-webkit-progress-bar]:bg-neutral-100 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-neutral-950 [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-neutral-950 ${className}`}
  />
);
