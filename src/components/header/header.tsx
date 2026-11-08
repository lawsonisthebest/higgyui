import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Menu, X } from "lucide-react";

type HeaderItem = {
  title: string;
  icon?: LucideIcon;
  href?: string;
  onClick?: () => void;
  active?: boolean;
};

type HeaderProps = {
  logo?: LucideIcon;
  title?: string;
  items?: HeaderItem[];
  itemsPosition?: "left" | "right" | "center";
  titlePosition?: "left" | "right" | "center";
  sticky?: boolean;
  className?: string;
};

export const Header = ({
  logo: Logo,
  title,
  items = [],
  itemsPosition = "right",
  titlePosition = "left",
  sticky = true,
  className = "",
}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const positionClasses = {
    left: "justify-self-start",
    center: "justify-self-center",
    right: "justify-self-end",
  };

  const renderItem = (item: HeaderItem, index: number) => {
    const Icon = item.icon;

    const styles = `inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      item.active
        ? "bg-neutral-100 text-neutral-950"
        : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950"
    }`;

    const content = (
      <>
        {Icon && <Icon size={16} strokeWidth={1.8} />}
        <span>{item.title}</span>
      </>
    );

    if (item.href) {
      return (
        <a
          key={index}
          href={item.href}
          onClick={() => {
            item.onClick?.();
            setMenuOpen(false);
          }}
          className={styles}
          aria-current={item.active ? "page" : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        key={index}
        type="button"
        onClick={() => {
          item.onClick?.();
          setMenuOpen(false);
        }}
        className={styles}
      >
        {content}
      </button>
    );
  };

  return (
    <header
      className={`w-full border-b border-neutral-200 bg-white/95 text-neutral-950 backdrop-blur-md ${
        sticky ? "sticky top-0 z-50" : "relative"
      } ${className}`}
    >
      <div className="mx-auto grid min-h-16 w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 md:grid-cols-3 md:px-8">
        <div
          className={`flex items-center gap-3 ${positionClasses[titlePosition]} ${
            titlePosition === "center"
              ? "md:col-start-2"
              : titlePosition === "right"
                ? "md:col-start-3"
                : "md:col-start-1"
          }`}
        >
          {Logo && (
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
              <Logo size={19} strokeWidth={1.8} />
            </div>
          )}

          {title && (
            <span className="whitespace-nowrap text-base font-semibold tracking-tight">
              {title}
            </span>
          )}
        </div>

        <nav
          aria-label="Main navigation"
          className={`hidden items-center gap-1 md:flex ${positionClasses[itemsPosition]} ${
            itemsPosition === "center"
              ? "md:col-start-2"
              : itemsPosition === "left"
                ? "md:col-start-1"
                : "md:col-start-3"
          }`}
          style={{
            gridRow: 1,
          }}
        >
          {items.map(renderItem)}
        </nav>

        {items.length > 0 && (
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex size-9 items-center justify-center justify-self-end rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {menuOpen && items.length > 0 && (
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 border-t border-neutral-100 px-4 py-3 md:hidden"
        >
          {items.map(renderItem)}
        </nav>
      )}
    </header>
  );
};
