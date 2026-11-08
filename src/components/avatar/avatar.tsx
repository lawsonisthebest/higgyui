import type { ComponentProps } from "react";

export type AvatarProps = Omit<ComponentProps<"span">, "children"> & {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-14 text-lg",
};

export const Avatar = ({ name, src, size = "md", className = "", ...props }: AvatarProps) => {
  const initials = name.trim().split(/\s+/).slice(0, 2)
    .map((word) => Array.from(word)[0] ?? "").join("").toUpperCase();

  return (
    <span
      role="img"
      aria-label={name}
      {...props}
      className={`relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 font-medium text-neutral-700 ${sizes[size]} ${className}`}
    >
      <span aria-hidden="true">{initials}</span>
      {src && (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 size-full bg-white object-cover"
          onError={(event) => { event.currentTarget.hidden = true; }}
        />
      )}
    </span>
  );
};
