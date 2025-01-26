import { ThumbnailCarousel } from "@/components/carousel/thumbnail-carousel";
import { Share } from "@/components/share/Share";
import { Product } from "@/types/storefront.types";
import { getProductUrl } from "@/lib/utils/url";
import { ProductAccordion } from "./product-accordion";
import { ProductHeader } from "./product-header";
import { ShippingDate } from "./shipping-date";

export function ProductDescription({
  product,
  reviewWidget,
}: {
  product: Product;
  reviewWidget: string;
}) {
  return (
    <section
      aria-labelledby="product-heading"
      className="container grid-cols-5 lg:grid py-lg lg:py-3xl space-y-lg lg:space-y-0"
    >
      <div className="col-span-3 relative">
        <div className="lg:sticky lg:top-[80px]">
          <ThumbnailCarousel content={product.images.edges} />
        </div>
      </div>
      <div className="space-y-lg lg:px-lg col-span-2">
        <ProductHeader product={product} reviewWidget={reviewWidget} />

        <ShippingDate metafields={product.metafields} />

        <ProductAccordion product={product} />

        <div className="flex">
          <Share
            title="Check out this product"
            url={`${process.env.NEXT_PUBLIC_SITE_URL}${getProductUrl({
              collection: product.collections.edges[0]?.node,
              handle: product.handle,
            })}`}
          />
        </div>
      </div>
    </section>
  );
}
