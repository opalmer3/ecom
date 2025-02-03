import {
  IMAGE_FRAGMENT,
  PRODUCT_CARD_FRAGMENT,
  SEO_FRAGMENT,
} from "./fragments";

export const PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}

  query Products($first: Int!, $after: String, $sortKey: ProductSortKeys) {
    products(first: $first, after: $after, sortKey: $sortKey) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...ProductCard
          description
          collections(first: 1) {
            edges {
              node {
                title
                handle
              }
            }
          }
        }
      }
    }
  }
`;

export const PRODUCT_BY_HANDLE_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${SEO_FRAGMENT}

  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductCard
      availableForSale
      description
      descriptionHtml
      tags
      collections(first: 1) {
        edges {
          node {
            products(first: 4, sortKey: BEST_SELLING, reverse: true) {
              edges {
                node {
                  ...ProductCard
                }
              }
            }
            title
            handle
          }
        }
      }
      images(first: 10) {
        edges {
          node {
            ...Image
          }
        }
      }
      options {
        id
        name
        values
      }
      seo {
        ...Seo
      }
      variants(first: 100) {
        edges {
          node {
            id
            title
            availableForSale
            sku
            quantityAvailable
            selectedOptions {
              name
              value
            }
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
      }
      totalInventory
      metafields(identifiers: [
      {namespace: "custom", key: "key_features"},
      {namespace: "custom", key: "specification"},
      {namespace: "custom", key: "whats_included"},
      {namespace: "custom", key: "care_maintenance"},
      {namespace: "custom", key: "additional_information"},
      {namespace: "custom", key: "shipping_date"},
      ]) {
        id
        key
        value
      }
    }
  }
`;
