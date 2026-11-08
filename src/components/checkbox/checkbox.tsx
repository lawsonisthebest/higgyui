import type { ComponentProps } from "react";
import { useField } from "../../lib/use-field";

export type CheckboxProps = Omit<ComponentProps<"input">, "type" | "children"> & {
  label: string;
  description?: string;
};

export const Checkbox = ({
  label,
  description,
  id,
  "aria-describedby": describedBy,
  className = "",
  ...props
}: CheckboxProps) => {
  const field = useField(id, describedBy, description);

  return (
    <div className="flex items-start gap-2.5 text-sm text-neutral-950">
      <input
        {...props}
        type="checkbox"
        id={field.id}
        aria-describedby={field.describedBy}
        className={`peer mt-0.5 size-4 shrink-0 accent-neutral-950 enabled:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 ${className}`}
      />
      <div className="grid gap-0.5 peer-disabled:opacity-50">
        <label htmlFor={field.id} className="font-medium">{label}</label>
        {description && <div id={field.messageId} className="text-neutral-600">{description}</div>}
      </div>
    </div>
  );
};
