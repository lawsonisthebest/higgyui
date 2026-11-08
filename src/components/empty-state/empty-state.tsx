import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type EmptyStateProps = Omit<ComponentProps<"div">, "title" | "children"> & {
  title: ReactNode;
  description?: ReactNode;
  icon?: LucideIcon;
  action?: ReactNode;
};

export const EmptyState = ({
  title,
  description,
  icon: Icon,
  action,
  className = "",
  ...props
}: EmptyStateProps) => (
  <div
    {...props}
    className={`flex flex-col items-center rounded-xl border border-dashed border-neutral-200 bg-white px-6 py-10 text-center text-neutral-950 ${className}`}
  >
    {Icon && (
      <div className="mb-4 grid size-10 place-items-center rounded-xl border border-neutral-200 bg-neutral-50">
        <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
      </div>
    )}
    <div className="font-semibold tracking-tight">{title}</div>
    {description != null && <div className="mt-1 text-sm text-neutral-600">{description}</div>}
    {action != null && <div className="mt-5">{action}</div>}
  </div>
);
