"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/storefront.types";
import { Button } from "@/components/ui/button";
import { AddToBag } from "./add-to-bag";
import { useCartStore } from "@/lib/store/cart";
import { Pill } from "@/components/ui/pill";
import { ProductPrice } from "@/components/product/product-price";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { cn } from "@/lib/utils";

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

  const variantOptions = useMemo(() => {
    return optionKeys.length > 0
      ? ([...options[optionKeys[0]]].length > 1 || optionKeys.length > 1) && (
          <div className="py-sm border-y space-y-md">
            {optionKeys.map((optionName, i) => (
              <div key={optionName} className="space-y-md">
                <fieldset
                  className="gap-(--spacing-sm) flex flex-wrap"
                  role="radiogroup"
                >
                  <legend className="type-button-sm mb-sm">{optionName}</legend>
                  {[...options[optionName]].map((value) => {
                    const variant = product.variants.edges.find((variant) =>
                      i === 0
                        ? variant.node.selectedOptions.some(
                            (option) =>
                              option.name === optionName &&
                              option.value === value
                          )
                        : variant.node.selectedOptions.every((option, index) =>
                            index === 0
                              ? selectedOptions[option.name] === option.value
                              : option.name === optionName &&
                                option.value === value
                          )
                    );

                    const isSelected = selectedOptions[optionName] === value;
                    return (
                      <label key={value} className="cursor-pointer font-medium">
                        <input
                          checked={isSelected}
                          className="hidden"
                          name={optionName}
                          type="radio"
                          value={value}
                          onChange={() => handleOptionChange(optionName, value)}
                        />
                        <div
                          className={cn(
                            "flex flex-col items-center gap-sm p-sm rounded-md w-[160px] h-full",
                            isSelected
                              ? "border-2 border-secondary"
                              : "border-2 border-border",
                            !variant?.node.availableForSale &&
                              "opacity-50 cursor-not-allowed"
                          )}
                        >
                          <button className="pointer-events-none flex flex-col gap-sm h-full w-full">
                            {variant?.node.image && (
                              <ResponsiveImage
                                fill
                                alt={`${optionName} ${value}`}
                                containerClassName="aspect-square"
                                sizes="128px"
                                src={variant.node.image.url}
                              />
                            )}
                            <span>{value}</span>
                          </button>
                          {i === 0 ? (
                            <span>
                              &pound;
                              {(() => {
                                const matchingVariants =
                                  product.variants.edges.filter((variant) =>
                                    variant.node.selectedOptions.some(
                                      (option) =>
                                        option.name === optionName &&
                                        option.value === value
                                    )
                                  );
                                const prices = matchingVariants.map(
                                  (v) => v.node.price.amount
                                );
                                const minPrice = Math.min(...prices);
                                const maxPrice = Math.max(...prices);
                                return optionKeys.length > 1
                                  ? `${minPrice} - ${maxPrice}`
                                  : minPrice;
                              })()}
                            </span>
                          ) : (
                            <span>&pound;{variant?.node.price?.amount}</span>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </fieldset>
              </div>
            ))}
          </div>
        )
      : null;
  }, [optionKeys, options, product.variants.edges, selectedOptions]);

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
          compareAtPrice={product.compareAtPriceRange}
          price={product.priceRange}
        />

        {product.seo.description && <div>{product.seo.description}</div>}

        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-(--spacing-xs)">
            {product.tags.map((tag) => (
              <Pill key={tag} variant="muted">
                {tag}
              </Pill>
            ))}
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: reviewWidget }} />

        {variantOptions}

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
