import type { ComponentProps, ReactNode } from "react";
import { CircleAlert, Info, X } from "lucide-react";

export type AlertProps = Omit<ComponentProps<"div">, "title"> & {
  title: ReactNode;
  variant?: "info" | "warning";
  onDismiss?: () => void;
};

export const Alert = ({
  title,
  variant = "info",
  onDismiss,
  children,
  className = "",
  ...props
}: AlertProps) => {
  const Icon = variant === "warning" ? CircleAlert : Info;

  return (
    <div
      {...props}
      className={`flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-neutral-950 ${className}`}
    >
      <Icon aria-hidden="true" size={19} strokeWidth={1.8} className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1 text-sm">
        <div className="font-semibold">{title}</div>
        {children != null && <div className="mt-1 text-neutral-600">{children}</div>}
      </div>
      {onDismiss && (
        <button
          type="button"
          aria-label="Dismiss alert"
          onClick={onDismiss}
          className="self-start rounded-md p-1 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-950"
        >
          <X aria-hidden="true" size={16} />
        </button>
      )}
    </div>
  );
};
