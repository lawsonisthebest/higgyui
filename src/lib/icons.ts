import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const icons: Record<string, LucideIcon | undefined> = {
  None: undefined,
  ...Object.fromEntries(
    Object.entries(LucideIcons).filter(
      ([name, value]) =>
        /^[A-Z]/.test(name) &&
        typeof value === "object" &&
        value !== null &&
        "$$typeof" in value,
    ),
  ),
};

export const iconOptions = Object.keys(icons).sort();

export const iconControl = {
  control: { type: "select" as const },
  options: iconOptions,
  mapping: icons,
};
