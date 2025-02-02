import { ResponsiveImage } from "@/components/ui/responsive-image";
import { cva, VariantProps } from "class-variance-authority";

export type SplitContentBlockProps = VariantProps<typeof imageVariants> & {
  content: {
    img: string;
    alt: string;
    eyebrow: string;
    title: string;
    description: string;
  };
};

const imageVariants = cva("", {
  variants: {
    variant: {
      "half-left": "col-span-2 md:col-span-4 lg:col-span-6 relative aspect-5/4",
      "half-right":
        "col-span-2 md:col-span-4 lg:col-span-6 relative aspect-5/4 order-2",
      "third-left":
        "col-span-2 md:col-span-4 lg:col-span-8 relative aspect-16/9 lg:mr-4",
      "third-right":
        "col-span-2 md:col-span-4 lg:col-span-8 relative aspect-16/9 order-2 lg:ml-4",
      "third-left-small": `col-span-2 md:col-span-4 lg:col-span-4 aspect-1/1 relative lg:mr-4 order-2 lg:order-none`,
      "third-right-small": `col-span-2 md:col-span-4 lg:col-span-4 aspect-1/1 relative lg:mr-4 order-2`,
    },
  },
  defaultVariants: {
    variant: "half-left",
  },
});

export const contentVariants = cva("", {
  variants: {
    variant: {
      "half-left":
        "col-span-2 md:col-span-4 lg:col-span-6 md:px-16 lg:pl-20 items-center text-center",
      "half-right":
        "col-span-2 md:col-span-4 lg:col-span-6 md:px-16 order-1 lg:pr-20 items-center text-center",
      "third-left":
        "col-span-2 md:col-span-4 lg:col-span-4 max-w-[416px] mx-auto",
      "third-right":
        "col-span-2 md:col-span-4 lg:col-span-4 order-1 max-w-[416px] mx-auto",
      "third-left-small": `col-span-2 md:col-span-4 lg:col-span-8`,
      "third-right-small": `col-span-2 md:col-span-4 lg:col-span-8 order-1`,
    },
  },
  defaultVariants: {
    variant: "half-left",
  },
});

export const buttonVariants = cva("", {
  variants: {
    variant: {
      "half-left": "justify-center",
      "half-right": "justify-center",
      "third-left": "",
      "third-right": "",
      "third-left-small": ``,
      "third-right-small": ``,
    },
  },
  defaultVariants: {
    variant: "half-left",
  },
});

export function SplitContentBlock({
  variant,
  content,
}: SplitContentBlockProps) {
  const titleId = `${content.title}-title`;
  const descriptionId = `${content.title}-description`;

  return (
    <section
      aria-describedby={descriptionId}
      aria-labelledby={titleId}
      className="container grid w-full grid-cols-2 py-xl md:grid-cols-4 lg:grid-cols-12 gap-(--spacing-xl)"
    >
      <ResponsiveImage
        fill
        priority
        alt={content.alt}
        className="inset-0"
        containerClassName={imageVariants({ variant })}
        loading="eager"
        sizes="50vw"
        src={content.img}
      />

      <div
        className={contentVariants({
          variant,
          className: "flex items-center justify-center",
        })}
      >
        <div className="flex flex-col gap-(--spacing-xl)">
          <div className="flex flex-col gap-md">
            <div className="type-button-md uppercase">{content.eyebrow}</div>
            <h2 className="type-title-lg" id={titleId}>
              {content.title}
            </h2>
          </div>
          <div className="type-body-md flex flex-col gap-md">
            {content.description}
          </div>
        </div>
      </div>
    </section>
  );
}
