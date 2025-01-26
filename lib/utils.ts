import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge, validators } from "tailwind-merge";

const twMerge = extendTailwindMerge<"type">({
  extend: {
    classGroups: {
      type: [{ type: [validators.isAny] }],
    },
    theme: {
      spacing: [validators.isAny],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
