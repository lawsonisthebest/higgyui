import type { ComponentProps } from "react";
import { Field } from "../../lib/field";
import { fieldControl, useField } from "../../lib/use-field";
import type { FieldOptions } from "../../lib/use-field";

export type TextareaProps = Omit<ComponentProps<"textarea">, "children"> & FieldOptions;

export const Textarea = ({
  label,
  description,
  error,
  id,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
  className = "",
  ...props
}: TextareaProps) => {
  const field = useField(id, describedBy, error || description);

  return (
    <Field id={field.id} label={label} description={description} error={error} messageId={field.messageId}>
      <textarea
        {...props}
        id={field.id}
        aria-describedby={field.describedBy}
        aria-invalid={error ? true : invalid}
        className={`${fieldControl} min-h-24 resize-y ${className}`}
      />
    </Field>
  );
};
