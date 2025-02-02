import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MDXRemote } from "next-mdx-remote/rsc";
import { en } from "@/i18n";
import { Product } from "@/types/storefront.types";

interface ProductAccordionProps {
  product: Product;
}

const metafields = [
  "additional_information",
  "care_maintenance",
  "key_features",
  "specification",
  "whats_included",
];

export function ProductAccordion({ product }: ProductAccordionProps) {
  return (
    <div className="text-left">
      <Accordion collapsible className="w-full space-y-4" type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger className="type-title-sm" headingLevel={2}>
            Product Details
          </AccordionTrigger>
          <AccordionContent>
            <div
              className="type-body-md space-y-4"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </AccordionContent>
        </AccordionItem>

        {product.metafields
          .filter((metafield) => metafields.includes(metafield?.key ?? ""))
          .map((metafield, i) => (
            <AccordionItem key={metafield?.id} value={`item-${i + 2}`}>
              <AccordionTrigger className="type-title-sm" headingLevel={2}>
                {en.metafields[metafield?.key as keyof typeof en.metafields]}
              </AccordionTrigger>
              <AccordionContent className="type-body-md [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-sm [&_li]:marker:mr-2">
                <MDXRemote source={metafield?.value || ""} />
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
}
