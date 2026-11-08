import { useId } from "react";
import type { ComponentProps, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionProps = Omit<ComponentProps<"div">, "children"> & {
  items: { id: string; title: string; content: ReactNode }[];
  defaultOpen?: string;
  multiple?: boolean;
};

export const Accordion = ({
  items,
  defaultOpen,
  multiple = false,
  className = "",
  ...props
}: AccordionProps) => {
  const name = useId();

  return (
    <div {...props} className={`divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white text-neutral-950 ${className}`}>
      {items.map(({ id, title, content }) => (
        <details key={id} name={multiple ? undefined : name} open={id === defaultOpen} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md px-4 py-3 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-600 [&::-webkit-details-marker]:hidden">
            {title}
            <ChevronDown aria-hidden="true" size={16} strokeWidth={1.8} className="shrink-0 text-neutral-500 group-open:rotate-180" />
          </summary>
          <div className="px-4 pb-4 text-sm text-neutral-600">{content}</div>
        </details>
      ))}
    </div>
  );
};
