import type { LucideIcon } from "lucide-react";

type ButtonProps = {
  title: string;
  hoverAnimation?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  iconSize?: number;
  iconThickness?: number;
};

export const Button = ({
  title,
  hoverAnimation,
  icon: Icon,
  iconPosition = "right",
  iconSize = 19,
  iconThickness = 1.5,
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-md w-max hover:cursor-pointer border border-gray-400 ${hoverAnimation ? "hover:opacity-100 opacity-75 hover:shadow-md transition duration-100" : ""}`}
    >
      {Icon && iconPosition === "left" && (
        <Icon size={iconSize} strokeWidth={iconThickness} />
      )}
      {title}
      {Icon && iconPosition === "right" && (
        <Icon size={iconSize} strokeWidth={iconThickness} />
      )}
    </button>
  );
};
