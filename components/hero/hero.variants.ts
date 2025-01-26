import { cva } from "class-variance-authority";

export const heroContentVariants = cva(
  "absolute inset-x-0 container flex flex-col",
  {
    variants: {
      xAlign: {
        left: "items-start text-left",
        middle: "items-center text-center",
        right: "items-end text-right",
      },
      yAlign: {
        top: "top-[10%]",
        middle: "top-1/2 -translate-y-1/2",
        bottom: "bottom-[10%]",
      },
    },
    defaultVariants: {
      xAlign: "middle",
      yAlign: "bottom",
    },
  }
);
