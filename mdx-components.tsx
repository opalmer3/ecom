import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="type-title-xl">{children}</h1>,
    h2: ({ children }) => <h2 className="type-title-lg">{children}</h2>,
    h3: ({ children }) => <h3 className="type-title-md">{children}</h3>,
    p: ({ children }) => <p className="type-body-md">{children}</p>,
    ...components,
  };
}
