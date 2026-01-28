import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  description?: string;
  className?: string;
}

/**
 * FAQ Accordion Section
 *
 * Expandable FAQ items using shadcn Accordion.
 *
 * @example
 * ```tsx
 * <FaqAccordion
 *   title="Frequently Asked Questions"
 *   faqs={[
 *     { question: "How long is shipping?", answer: "3-5 business days" },
 *     { question: "What's your return policy?", answer: "30-day returns" },
 *   ]}
 * />
 * ```
 */
export function FaqAccordion({
  faqs,
  title,
  description,
  className,
}: FaqAccordionProps) {
  return (
    <section className={cn("py-3xl", className)}>
      <div className="container">
        <div>
          {(title || description) && (
            <div className="text-center mb-3xl">
              {title && <h2 className="type-title-lg mb-md">{title}</h2>}
              {description && (
                <p className="type-body-lg text-muted-foreground max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}

          <Accordion collapsible className="w-full" type="single">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="type-title-sm text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="type-body-md text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
