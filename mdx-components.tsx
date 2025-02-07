import type { MDXComponents } from "mdx/types";
import { ResponsiveImage } from "@/components/ui/responsive-image";

export const CustomComponents: MDXComponents = {
  h1: ({ children }) => <h1 className="type-title-xl">{children}</h1>,
  h2: ({ children }) => <h2 className="type-title-lg">{children}</h2>,
  h3: ({ children }) => <h3 className="type-title-md">{children}</h3>,
  p: ({ children }) => (
    <p className="type-body-lg leading-[1.75]">{children}</p>
  ),
  ul: ({ children }) => <ul className="pl-lg space-y-xs">{children}</ul>,
  li: ({ children }) => <li className="list-disc">{children}</li>,
  img: ({ alt, src, containerClassName, ...props }) => (
    <ResponsiveImage
      fill
      alt={alt}
      className="object-cover"
      containerClassName={containerClassName}
      src={src}
      {...props}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...CustomComponents,
    ...components,
  };
}
