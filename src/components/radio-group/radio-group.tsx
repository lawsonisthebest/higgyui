import { useId } from "react";
import type { ComponentProps } from "react";

export type RadioGroupProps = Omit<ComponentProps<"fieldset">, "children" | "onChange"> & {
  label: string;
  name?: string;
  options: { value: string; label: string; disabled?: boolean }[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "vertical" | "horizontal";
  required?: boolean;
};

export const RadioGroup = ({
  label,
  name,
  options,
  value,
  defaultValue,
  onValueChange,
  orientation = "vertical",
  required,
  className = "",
  ...props
}: RadioGroupProps) => {
  const generatedName = useId();

  return (
    <fieldset {...props} className={`min-w-0 text-sm text-neutral-950 disabled:opacity-50 ${className}`}>
      <legend className="mb-2 font-medium">{label}</legend>
      <div className={`flex gap-3 ${orientation === "horizontal" ? "flex-wrap" : "flex-col"}`}>
        {options.map((option) => (
          <label key={option.value} className="flex w-max items-center gap-2 has-disabled:opacity-50">
            <input
              type="radio"
              name={name ?? generatedName}
              value={option.value}
              checked={value == null ? undefined : value === option.value}
              defaultChecked={value == null ? defaultValue === option.value : undefined}
              disabled={option.disabled}
              required={required}
              onChange={() => onValueChange?.(option.value)}
              className="size-4 accent-neutral-950 enabled:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
};
