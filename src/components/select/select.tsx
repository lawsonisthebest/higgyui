import type { ComponentProps } from "react";
import { Field } from "../../lib/field";
import { fieldControl, useField } from "../../lib/use-field";
import type { FieldOptions } from "../../lib/use-field";

export type SelectProps = Omit<ComponentProps<"select">, "children"> & FieldOptions & {
  options: { value: string; label: string; disabled?: boolean }[];
};

export const Select = ({
  label,
  description,
  error,
  options,
  id,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
  className = "",
  ...props
}: SelectProps) => {
  const field = useField(id, describedBy, error || description);

  return (
    <Field id={field.id} label={label} description={description} error={error} messageId={field.messageId}>
      <select
        {...props}
        id={field.id}
        aria-describedby={field.describedBy}
        aria-invalid={error ? true : invalid}
        className={`${fieldControl} min-h-10 ${className}`}
      >
        {options.map(({ value, label, disabled }) => (
          <option key={value} value={value} disabled={disabled}>{label}</option>
        ))}
      </select>
    </Field>
  );
};
