import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { Children } from "react";

export type CardContainerProps = {
  alignment?: "left" | "center";
  content?: {
    eyebrow?: string;
    link?: {
      text: string;
      url: string;
    };
    title: string;
  };
  rangeStart?: number;
  rangeEnd?: number;
  total?: number;
} & Omit<React.ComponentProps<"section">, "content">;

export function CardContainer({
  alignment,
  content,
  className,
  children,
  rangeStart,
  rangeEnd,
  total,
  ...props
}: PropsWithChildren<CardContainerProps>) {
  const cardCount = Children.count(children);
  const titleId = `title-${content?.title}`;

  return (
    <section
      aria-labelledby={titleId}
      className={cn("py-3xl container space-y-3xl", className)}
      {...props}
    >
      {content && (
        <div
          className={cn(
            "w-full",
            alignment === "center" && "flex flex-col items-center text-center"
          )}
        >
          {content.eyebrow ? (
            <div className="type-accent-md mb-sm w-full">{content.eyebrow}</div>
          ) : null}
          <div
            className={cn(
              "gap-xs flex flex-col justify-between md:items-end",
              alignment === "center" ? "md:flex-col" : "md:flex-row"
            )}
          >
            <h2 className="type-title-lg" id={titleId}>
              {content.title}
            </h2>
            {content.link ? (
              <Button
                asChild
                className="w-fit -ml-md md:ml-0 md:-mr-md"
                variant="ghost"
              >
                <Link href={content.link.url}>{content.link.text}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      )}
      {rangeStart && rangeEnd && total && (
        <div className="flex justify-end">
          <div className="type-body-sm">
            Showing {rangeStart}–{rangeEnd} of {total} result
            {total === 1 ? "" : "s"}
          </div>
        </div>
      )}
      <ol
        className={cn(
          "gap-2xl grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3",
          cardCount >= 4 && "lg:grid-cols-4"
        )}
      >
        {children}
      </ol>
    </section>
  );
}
