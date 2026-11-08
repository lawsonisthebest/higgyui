import { useId, useState } from "react";
import type { ComponentProps, KeyboardEvent, ReactNode } from "react";

export type TabsProps = Omit<ComponentProps<"div">, "children"> & {
  label: string;
  items: { id: string; title: string; content: ReactNode; disabled?: boolean }[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export const Tabs = ({
  label,
  items,
  value,
  defaultValue,
  onValueChange,
  className = "",
  ...props
}: TabsProps) => {
  const id = useId();
  const [selection, setSelection] = useState(defaultValue);
  const enabled = items.filter((item) => !item.disabled);
  const active = enabled.find((item) => item.id === (value ?? selection)) ?? enabled[0];

  const select = (item: (typeof items)[number]) => {
    if (item.id === active?.id) return;
    if (value === undefined) setSelection(item.id);
    onValueChange?.(item.id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, itemId: string) => {
    const index = enabled.findIndex((item) => item.id === itemId);
    const last = enabled.length - 1;
    const rtl = getComputedStyle(event.currentTarget).direction === "rtl";
    let nextIndex: number;

    switch (event.key) {
      case "ArrowLeft":
        nextIndex = (index + (rtl ? 1 : last)) % enabled.length;
        break;
      case "ArrowRight":
        nextIndex = (index + (rtl ? last : 1)) % enabled.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = last;
        break;
      default:
        return;
    }

    event.preventDefault();
    const next = enabled[nextIndex];
    const nextTab = items.indexOf(next);
    const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabs?.[nextTab]?.focus();
    select(next);
  };

  return (
    <div {...props} className={`text-sm text-neutral-950 ${className}`}>
      <div role="tablist" aria-label={label} className="flex flex-wrap gap-1 border-b border-neutral-200">
        {items.map((item, index) => (
          <button
            key={item.id}
            id={`${id}-tab-${index}`}
            type="button"
            role="tab"
            aria-controls={`${id}-panel-${index}`}
            aria-selected={item.id === active?.id}
            disabled={item.disabled}
            tabIndex={item.id === active?.id ? 0 : -1}
            onClick={() => select(item)}
            onKeyDown={(event) => handleKeyDown(event, item.id)}
            className="rounded-t-md border-b-2 border-transparent px-3 py-2 font-medium text-neutral-600 enabled:cursor-pointer enabled:hover:bg-neutral-50 aria-selected:border-neutral-950 aria-selected:text-neutral-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-600 disabled:opacity-50"
          >
            {item.title}
          </button>
        ))}
      </div>
      {items.map((item, index) => (
        <div
          key={item.id}
          id={`${id}-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${index}`}
          hidden={item.id !== active?.id}
          tabIndex={0}
          className="py-4 focus-visible:outline-2 focus-visible:outline-neutral-600"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};
