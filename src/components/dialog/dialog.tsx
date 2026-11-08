import { useId, useRef } from "react";
import type { ComponentProps, ReactNode } from "react";
import { X } from "lucide-react";

export type DialogProps = Omit<ComponentProps<"dialog">, "title" | "open" | "ref"> & {
  title: string;
  triggerLabel: string;
  description?: string;
  footer?: ReactNode;
};

export const Dialog = ({
  title,
  triggerLabel,
  description,
  footer,
  children,
  className = "",
  ...props
}: DialogProps) => {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className="inline-flex w-max cursor-pointer items-center justify-center rounded-md border border-gray-400 bg-white px-4 py-2 text-black hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
      >
        {triggerLabel}
      </button>
      <dialog
        {...props}
        ref={dialog}
        aria-labelledby={`${id}-title`}
        aria-describedby={description ? `${id}-description` : undefined}
        className={`m-auto max-h-[calc(100dvh-2rem)] w-md max-w-[calc(100%-2rem)] overflow-auto rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow-lg backdrop:bg-neutral-950/30 ${className}`}
      >
        <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-4">
          <div>
            <h2 id={`${id}-title`} className="font-semibold tracking-tight">{title}</h2>
            {description && <p id={`${id}-description`} className="mt-1 text-sm text-neutral-600">{description}</p>}
          </div>
          <button
            type="button"
            aria-label="Close dialog"
            onClick={() => dialog.current?.close()}
            className="cursor-pointer rounded-md p-1 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
          >
            <X aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>
        </div>
        {children != null && <div className="px-5 pb-5 text-sm">{children}</div>}
        {footer != null && <div className="border-t border-neutral-200 px-5 py-4">{footer}</div>}
      </dialog>
    </>
  );
};
