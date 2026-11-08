import type { ComponentProps, ReactNode } from "react";

export type CardProps = Omit<ComponentProps<"div">, "title"> & {
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
};

export const Card = ({
  title,
  description,
  children,
  footer,
  className = "",
  ...props
}: CardProps) => (
  <div
    {...props}
    className={`w-full rounded-xl border border-neutral-200 bg-white text-neutral-950 ${className}`}
  >
    {(title != null || description != null) && (
      <div className={`space-y-1 px-5 pt-5 ${children == null ? "pb-5" : ""}`}>
        {title != null && <div className="font-semibold tracking-tight">{title}</div>}
        {description != null && <div className="text-sm text-neutral-600">{description}</div>}
      </div>
    )}
    {children != null && <div className="px-5 py-5 text-sm">{children}</div>}
    {footer != null && <div className="border-t border-neutral-200 px-5 py-4">{footer}</div>}
  </div>
);
