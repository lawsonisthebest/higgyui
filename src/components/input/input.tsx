import type { ComponentProps } from "react";
import { Field } from "../../lib/field";
import { fieldControl, useField } from "../../lib/use-field";
import type { FieldOptions } from "../../lib/use-field";

export type InputProps = Omit<ComponentProps<"input">, "children"> & FieldOptions;

export const Input = ({
  label,
  description,
  error,
  id,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
  className = "",
  ...props
}: InputProps) => {
  const field = useField(id, describedBy, error || description);

  return (
    <Field id={field.id} label={label} description={description} error={error} messageId={field.messageId}>
      <input
        {...props}
        id={field.id}
        aria-describedby={field.describedBy}
        aria-invalid={error ? true : invalid}
        className={`${fieldControl} min-h-10 ${className}`}
      />
    </Field>
  );
};
