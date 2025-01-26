import type { PluginAPI } from "tailwindcss/types/config";

export const fontSizes = {
  title: {
    sm: ["1.25rem", "1.75rem"],
    md: ["1.5rem", "2rem"],
    lg: ["2rem", "2.5rem"],
    xl: ["2.5rem", "3rem"],
  },
  body: {
    sm: ["0.875rem", "1.375rem"],
    md: ["1rem", "1.5rem"],
    lg: ["1.125rem", "1.75rem"],
    xl: ["1.25rem", "2rem"],
  },
  button: {
    sm: ["0.875rem", "1.25rem"],
    md: ["1rem", "1.5rem"],
    lg: ["1.125rem", "1.75rem"],
    xl: ["1.25rem", "2rem"],
  },
} as const;

export type FontSize = keyof typeof fontSizes;
export type FontSizeVariant = keyof (typeof fontSizes)[FontSize];
export type TypographyClass = `type-${FontSize}-${FontSizeVariant}`;

const typographyStyles = {
  title: {
    fontFamily: "var(--font-sans)",
    fontWeight: "500",
    letterSpacing: "wide",
  },
  body: {
    fontFamily: "var(--font-sans)",
    fontWeight: "400",
  },
  button: {
    fontFamily: "var(--font-sans)",
    fontWeight: "500",
    textTransform: "capitalize" as const,
  },
} as const;

export function createTypographyPlugin({ addComponents }: PluginAPI) {
  const styles = Object.entries(fontSizes).reduce((acc, [fontType, sizes]) => {
    const baseStyle = typographyStyles[fontType as FontSize];

    return {
      ...acc,
      ...Object.entries(sizes).reduce(
        (variants, [variant, [fontSize, lineHeight]]) => ({
          ...variants,
          [`.type-${fontType}-${variant}`]: {
            fontSize,
            lineHeight,
            ...baseStyle,
          },
        }),
        {}
      ),
    };
  }, {});

  addComponents(styles);
}
