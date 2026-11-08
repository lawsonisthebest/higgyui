import type { ComponentProps } from "react";
import { useField } from "../../lib/use-field";

export type SwitchProps = Omit<ComponentProps<"input">, "type" | "role" | "children"> & {
  label: string;
  description?: string;
};

export const Switch = ({
  label,
  description,
  id,
  "aria-describedby": describedBy,
  className = "",
  ...props
}: SwitchProps) => {
  const field = useField(id, describedBy, description);

  return (
    <div className={`flex items-start gap-3 text-sm text-neutral-950 ${className}`}>
      <div className="relative mt-0.5 shrink-0">
        <input
          {...props}
          type="checkbox"
          role="switch"
          id={field.id}
          aria-describedby={field.describedBy}
          className="peer absolute inset-0 z-10 size-full opacity-0 enabled:cursor-pointer"
        />
        <span
          aria-hidden="true"
          className="block h-5 w-9 rounded-full border border-neutral-400 bg-neutral-200 transition-colors after:absolute after:left-0.5 after:top-0.5 after:size-4 after:rounded-full after:border after:border-neutral-400 after:bg-white after:transition-transform peer-checked:border-neutral-950 peer-checked:bg-neutral-950 peer-checked:after:translate-x-4 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-600 peer-disabled:opacity-50 motion-reduce:transition-none motion-reduce:after:transition-none"
        />
      </div>
      <div className="grid gap-0.5">
        <label htmlFor={field.id} className="font-medium">{label}</label>
        {description && <div id={field.messageId} className="text-neutral-600">{description}</div>}
      </div>
    </div>
  );
};
