import { Collection } from "@/types/storefront.types";

type ProductUrlParams = {
  collection: Pick<Collection, "handle">;
  handle: string;
};

/**
 * Generates a URL for a product based on its collection and handle
 * @param params Object containing collection and product handle
 * @returns URL string in the format /{collection.handle}/{handle}
 */
export function getProductUrl({
  collection,
  handle,
}: ProductUrlParams): string {
  return `/${collection.handle}/${handle}`;
}
