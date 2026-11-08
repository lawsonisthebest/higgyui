import type { ReactNode } from "react";
import type { FieldOptions } from "./use-field";

type FieldProps = FieldOptions & {
  id: string;
  messageId?: string;
  children: ReactNode;
};

export const Field = ({ id, label, description, error, messageId, children }: FieldProps) => (
  <div className="grid w-full gap-1.5 text-sm text-neutral-950">
    <label htmlFor={id} className="font-medium">{label}</label>
    {children}
    {(error || description) && (
      <div id={messageId} className={error ? "font-medium text-neutral-950" : "text-neutral-600"}>
        {error || description}
      </div>
    )}
  </div>
);
