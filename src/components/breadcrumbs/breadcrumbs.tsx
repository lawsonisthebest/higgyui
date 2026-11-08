import type { ComponentProps } from "react";
import { ChevronRight } from "lucide-react";

export type BreadcrumbsProps = Omit<ComponentProps<"nav">, "children"> & {
  items: { title: string; href?: string }[];
};

export const Breadcrumbs = ({ items, className = "", ...props }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" {...props} className={`text-sm ${className}`}>
    <ol className="flex flex-wrap items-center gap-2">
      {items.map(({ title, href }, index) => {
        const current = index === items.length - 1;
        return (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <ChevronRight aria-hidden="true" size={14} strokeWidth={1.8} className="text-neutral-500" />}
            {href && !current ? (
              <a href={href} className="rounded-sm text-neutral-600 hover:text-neutral-950 hover:underline">
                {title}
              </a>
            ) : (
              <span aria-current={current ? "page" : undefined} className={current ? "font-medium text-neutral-950" : "text-neutral-600"}>
                {title}
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);
