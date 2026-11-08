import type { ComponentProps, ReactNode } from "react";

export type KbdProps = ComponentProps<"kbd"> & {
  children: ReactNode;
};

export const Kbd = ({ children, className = "", ...props }: KbdProps) => (
  <kbd
    {...props}
    className={`inline-flex min-h-6 min-w-6 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 px-1.5 font-mono text-xs font-medium text-neutral-700 ${className}`}
  >
    {children}
  </kbd>
);
