import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";

export type IconButtonProps = Omit<ComponentProps<"button">, "children"> & {
  label: string;
  icon: LucideIcon;
  iconSize?: number;
  iconThickness?: number;
  variant?: "outline" | "ghost";
};

const variants = {
  outline: "border-gray-400 bg-white",
  ghost: "border-transparent bg-transparent",
};

export const IconButton = ({
  label,
  icon: Icon,
  iconSize = 19,
  iconThickness = 1.5,
  variant = "outline",
  type = "button",
  className = "",
  ...props
}: IconButtonProps) => (
  <button
    aria-label={label}
    title={label}
    {...props}
    type={type}
    className={`inline-grid size-10 place-items-center rounded-md border text-black transition-colors enabled:cursor-pointer enabled:hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 disabled:opacity-50 ${variants[variant]} ${className}`}
  >
    <Icon aria-hidden="true" size={iconSize} strokeWidth={iconThickness} />
  </button>
);
