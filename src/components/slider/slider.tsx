import type { ComponentProps } from "react";
import { Field } from "../../lib/field";
import { useField } from "../../lib/use-field";
import type { FieldOptions } from "../../lib/use-field";

export type SliderProps = Omit<ComponentProps<"input">, "type" | "children"> & FieldOptions;

export const Slider = ({
  label,
  description,
  error,
  id,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
  className = "",
  ...props
}: SliderProps) => {
  const field = useField(id, describedBy, error || description);

  return (
    <Field id={field.id} label={label} description={description} error={error} messageId={field.messageId}>
      <input
        {...props}
        id={field.id}
        type="range"
        aria-describedby={field.describedBy}
        aria-invalid={error ? true : invalid}
        className={`h-6 w-full accent-neutral-950 enabled:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 disabled:opacity-50 ${className}`}
      />
    </Field>
  );
};
