import {
  IMAGE_FRAGMENT,
  PRODUCT_CARD_FRAGMENT,
  SEO_FRAGMENT,
} from "./fragments";

export const COLLECTIONS_QUERY = `#graphql
  ${IMAGE_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  ${SEO_FRAGMENT}

  query Collections($first: Int!, $after: String, $productsFirst: Int!, $productsAfter: String) {
    collections(first: $first, after: $after, sortKey: TITLE) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          handle
          description
          descriptionHtml
          updatedAt
          image {
            ...Image
          }
          metafield(namespace:"custom",key: "mobile_image") {
            reference {
              ... on MediaImage {
                image {
                  url
                  altText
                }
              }
            }
          }
          products(first: $productsFirst, after: $productsAfter) {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              cursor
              node {
                ...ProductCard
              }
            }
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
`;

export const COLLECTION_BY_HANDLE_QUERY = `#graphql
  ${IMAGE_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  ${SEO_FRAGMENT}

  query CollectionByHandle($handle: String!, $productsFirst: Int!, $productsAfter: String) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      metafield(namespace:"custom",key: "mobile_image") {
        reference {
          ... on MediaImage {
            image {
              url
              altText
            }
          }
        }
      }
      image {
        ...Image
      }
      products(first: $productsFirst, after: $productsAfter) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            ...ProductCard
          }
        }
      }
      seo {
        ...Seo
      }
    }
  }
`;
