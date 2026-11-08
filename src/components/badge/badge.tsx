import type { ComponentProps, ReactNode } from "react";

export type BadgeProps = ComponentProps<"span"> & {
  children: ReactNode;
  variant?: "outline" | "muted" | "solid";
};

const variants = {
  outline: "border-neutral-200 bg-white text-neutral-700",
  muted: "border-transparent bg-neutral-100 text-neutral-700",
  solid: "border-transparent bg-neutral-950 text-white",
};

export const Badge = ({
  children,
  variant = "outline",
  className = "",
  ...props
}: BadgeProps) => (
  <span
    {...props}
    className={`inline-flex w-max items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
  >
    {children}
  </span>
);
