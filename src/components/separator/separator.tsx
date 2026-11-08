import type { ComponentProps } from "react";

export type SeparatorProps = Omit<ComponentProps<"div">, "children"> & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

export const Separator = ({
  orientation = "horizontal",
  decorative = false,
  className = "",
  ...props
}: SeparatorProps) => (
  <div
    {...props}
    role={decorative ? "presentation" : "separator"}
    aria-orientation={decorative ? undefined : orientation}
    className={`shrink-0 bg-neutral-200 ${orientation === "vertical" ? "w-px self-stretch" : "h-px w-full"} ${className}`}
  />
);
