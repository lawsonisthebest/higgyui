import type { ComponentProps } from "react";

export type SkeletonProps = Omit<ComponentProps<"div">, "children"> & {
  animated?: boolean;
};

export const Skeleton = ({ animated = true, className = "", ...props }: SkeletonProps) => (
  <div
    {...props}
    aria-hidden="true"
    className={`h-4 w-full rounded-md bg-neutral-100 ${animated ? "motion-safe:animate-pulse" : ""} ${className}`}
  />
);
