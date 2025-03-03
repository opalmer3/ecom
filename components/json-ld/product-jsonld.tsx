interface ProductJsonLdProps {
  name: string;
  description: string;
  images: string[];
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
    priceValidUntil?: string;
    url: string;
    shippingDetails?: {
      shippingRate: {
        value: number;
        currency: string;
      };
      shippingDestination: {
        addressCountry: string;
      };
      deliveryTime: {
        handlingTime: {
          minValue: number;
          maxValue: number;
          unitCode: string;
        };
        transitTime: {
          minValue: number;
          maxValue: number;
          unitCode: string;
        };
      };
    };
  }[];
  brand?: {
    name: string;
  };
  sku?: string;
  gtin?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  hasMerchantReturnPolicy?: {
    applicableCountry: string;
    returnPolicyCategory: string;
    merchantReturnDays: number;
    returnMethod: string;
    returnFees: string;
    returnShippingFeesAmount?: { value: number; currency: string };
  };
}

export function ProductJsonLd({
  name,
  description,
  images,
  offers,
  brand,
  sku,
  gtin,
  aggregateRating,
  hasMerchantReturnPolicy,
}: ProductJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: images,
    offers: offers.map((offer) => ({
      "@type": "Offer",
      ...offer,
      ...(offer.shippingDetails && {
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            ...offer.shippingDetails.shippingRate,
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            ...offer.shippingDetails.shippingDestination,
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              ...offer.shippingDetails.deliveryTime.handlingTime,
            },
            transitTime: {
              "@type": "QuantitativeValue",
              ...offer.shippingDetails.deliveryTime.transitTime,
            },
          },
        },
      }),
      ...(hasMerchantReturnPolicy && {
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          ...hasMerchantReturnPolicy,
          returnShippingFeesAmount: {
            "@type": "MonetaryAmount",
            value: hasMerchantReturnPolicy?.returnShippingFeesAmount?.value,
            currency:
              hasMerchantReturnPolicy?.returnShippingFeesAmount?.currency,
          },
        },
      }),
    })),
    ...(brand && { brand: { "@type": "Brand", ...brand } }),
    ...(sku && { sku }),
    ...(gtin && { gtin }),
    ...(aggregateRating &&
      aggregateRating.reviewCount > 0 && {
        aggregateRating: {
          "@type": "AggregateRating",
          ...aggregateRating,
        },
      }),
    ...(hasMerchantReturnPolicy && {
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        ...hasMerchantReturnPolicy,
      },
    }),
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}
