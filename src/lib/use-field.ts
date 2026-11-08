import { useId } from "react";

export type FieldOptions = {
  label: string;
  description?: string;
  error?: string;
};

export const fieldControl =
  "block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-500";

export function useField(id: string | undefined, describedBy: string | undefined, message: string | undefined) {
  const generatedId = useId();
  const messageId = message ? `${generatedId}-message` : undefined;

  return {
    id: id ?? generatedId,
    messageId,
    describedBy: [describedBy, messageId].filter(Boolean).join(" ") || undefined,
  };
}
