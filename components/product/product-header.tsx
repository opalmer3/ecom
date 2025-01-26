"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/storefront.types";
import { Button } from "@/components/ui/button";
import { AddToBag } from "./add-to-bag";
import { useCartStore } from "@/lib/store/cart";
import { Pill } from "@/components/ui/pill";
import { ProductPrice } from "@/components/product/product-price";

interface ProductHeaderProps {
  product: Product;
  reviewWidget: string;
}

export function ProductHeader({ product, reviewWidget }: ProductHeaderProps) {
  const options = useMemo(
    () =>
      product.variants.edges.reduce<Record<string, Set<string>>>(
        (acc, variant) => {
          variant.node.selectedOptions.forEach(({ name, value }) => {
            if (!acc[name]) acc[name] = new Set();
            acc[name].add(value);
          });
          return acc;
        },
        {}
      ),
    [product.variants.edges]
  );

  const optionKeys = useMemo(() => Object.keys(options), [options]);

  const [selectedOptions, setSelectedOptions] = useState(
    optionKeys.reduce<Record<string, string>>(
      (acc, key) => ({ ...acc, [key]: [...options[key]][0] }),
      {}
    )
  );

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  const selectedVariant = product.variants.edges.find((variant) =>
    variant.node.selectedOptions.every(
      (opt) => selectedOptions[opt.name] === opt.value
    )
  );

  const { addItem, isLoading } = useCartStore();

  return (
    <>
      <div className="space-y-md flex flex-col">
        <span className="text-foreground/80">
          {product.collections.edges[0]?.node.title}
        </span>
        <h1 className="type-title-md" id="product-heading">
          {product.title}
        </h1>

        <ProductPrice
          compareAtPrice={selectedVariant?.node.compareAtPrice}
          price={
            selectedVariant?.node.price ||
            product.priceRange.minVariantPrice.amount
          }
        />

        {product.seo.description && <div>{product.seo.description}</div>}

        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-xs">
            {product.tags.map((tag) => (
              <Pill key={tag} variant="muted">
                {tag}
              </Pill>
            ))}
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: reviewWidget }} />

        {optionKeys.length > 1 && (
          <div className="py-sm border-y space-y-md">
            {optionKeys.map((optionName) => (
              <div key={optionName} className="space-y-md">
                <fieldset className="gap-sm flex" role="radiogroup">
                  <legend className="type-button-sm mb-sm">{optionName}</legend>
                  {[...options[optionName]].map((value) => (
                    <label key={value} className="cursor-pointer">
                      <input
                        checked={selectedOptions[optionName] === value}
                        className="hidden"
                        name={optionName}
                        type="radio"
                        value={value}
                        onChange={() => handleOptionChange(optionName, value)}
                      />
                      <Button
                        className="pointer-events-none"
                        size="sm"
                        variant={
                          selectedOptions[optionName] === value
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {value}
                      </Button>
                    </label>
                  ))}
                </fieldset>
              </div>
            ))}
          </div>
        )}

        <AddToBag
          isLoading={isLoading}
          isAvailable={
            selectedVariant
              ? selectedVariant.node.availableForSale
              : product.availableForSale
          }
          maxQuantity={
            selectedVariant?.node.quantityAvailable ??
            product.totalInventory ??
            99
          }
          onAddToBag={async (quantity) => {
            if (!selectedVariant) return;

            await addItem(selectedVariant.node.id, quantity);
          }}
        />
      </div>
    </>
  );
}
