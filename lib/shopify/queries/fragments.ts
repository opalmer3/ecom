export const PRODUCT_CARD_FRAGMENT = `#graphql
  fragment ProductCard on Product {
    id
    title
    handle
    collections(first: 1) {
      edges {
        node {
          title
          handle
        }
      }
    }
    description
    featuredImage {
      altText
      url(transform: { preferredContentType: WEBP })
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
  }
`;

export const IMAGE_FRAGMENT = `#graphql
  fragment Image on Image {
    id
    altText
    url
  }
`;

export const SEO_FRAGMENT = `#graphql
  fragment Seo on SEO {
    title
    description
  }
`;

export const MONEY_FRAGMENT = `#graphql
  fragment Money on MoneyV2 {
    amount
    currencyCode
  }
`;

export const CART_LINE_FRAGMENT = `#graphql
  fragment CartLine on CartLine {
    id
    quantity
    merchandise {
      ... on ProductVariant {
        id
        title
        image {
          url
          altText
        }
        price {
          ...Money
        }
        product {
          title
        }
          quantityAvailable
      }
    }
  }
  ${MONEY_FRAGMENT}
`;

export const CART_FRAGMENT = `#graphql
  fragment Cart on Cart {
    id
    checkoutUrl
    lines(first: 20) {
      edges {
        node {
          ...CartLine
        }
      }
    }
    cost {
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
    }
  }
  ${CART_LINE_FRAGMENT}
`;
