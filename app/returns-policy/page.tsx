import { Metadata } from "next";

export default function ReturnsPolicyPage() {
  return (
    <div className="container py-xl space-y-lg">
      <h1 className="type-title-lg">Returns Policy</h1>

      <div className="space-y-xl">
        <p className="type-body-sm text-muted-foreground">
          Last updated: January 30, 2025
        </p>

        <section className="space-y-sm">
          <h2 className="type-title-sm">30-Day Return Policy</h2>
          <p>
            We have a 30-day return policy, which means you have 30 days after
            receiving your item to request a return.
          </p>
          <p>To be eligible for a return, your item must be:</p>
          <ul className="list-disc pl-lg type-body space-y-xs">
            <li>In the same condition that you received it</li>
            <li>Unused</li>
            <li>In its original packaging</li>
            <li>In working order</li>
          </ul>
          <p>
            The price of our products doesn&apos;t allow for free returns. If
            you&apos;re returning an item because you&apos;ve changed your mind,
            you&apos;ll need to arrange for the goods to be returned to us. We
            advise that a secure/tracked service is used to ensure all returned
            items arrive back to us, within 30 days of receiving the product, in
            a resalable condition. Once we receive your returned order we will
            inspect all goods and any refunds due will be processed within 10
            days.
          </p>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">How to Start a Return</h2>
          <div className="space-y-xs">
            <p>
              To start a return, contact us at{" "}
              <a
                className="text-primary hover:underline font-medium"
                href="mailto:contact@modernlighting.store"
              >
                contact@modernlighting.store
              </a>
            </p>
            <p>
              We will reach out to you to provide the address to return the
              item(s).
            </p>
          </div>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">Damages and Issues</h2>
          <p>
            Please inspect your order upon reception and contact us immediately
            if the item is defective, damaged or if you receive the wrong item,
            so that we can evaluate the issue and give you a replacement or full
            refund. You must provide us with a photo as evidence so we can
            verify its authenticity. Damaged items must be reported within 1
            week of receiving your order.
          </p>
          <p>
            If your item is lost or does not arrive within 3 weeks we will give
            you a full refund.
          </p>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">Refunds</h2>
          <div className="space-y-xs">
            <p>
              We will notify you once we&apos;ve received and inspected your
              return, and let you know if the refund was approved or not.
            </p>
            <p>
              If approved, you&apos;ll be automatically refunded on your
              original payment method within 10 business days. Please remember
              it can take some time for your bank or credit card company to
              process and post the refund too.
            </p>
            <p>
              If more than 15 business days have passed since we&apos;ve
              approved your return, please contact us at{" "}
              <a
                className="text-primary hover:underline font-medium"
                href="mailto:contact@modernlighting.store"
              >
                contact@modernlighting.store
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Easy Returns & Refunds | The Modern Lighting Store Policy",
  description: "Hassle-free returns at The Modern Lighting Store. Learn about our return process, refund eligibility, and how we ensure a smooth shopping experience.",
  openGraph: {
    title: "Easy Returns & Refunds | The Modern Lighting Store Policy",
    description: "Hassle-free returns at The Modern Lighting Store. Learn about our return process, refund eligibility, and how we ensure a smooth shopping experience.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Easy Returns & Refunds | The Modern Lighting Store Policy",
    description: "Hassle-free returns at The Modern Lighting Store. Learn about our return process, refund eligibility, and how we ensure a smooth shopping experience.",
  },
};
