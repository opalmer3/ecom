import { CART_FRAGMENT } from "./fragments";

export const CREATE_CART_MUTATION = `#graphql
mutation cartCreate($input: CartInput!) {
  cartCreate(input: $input) {
    cart {
      ...Cart
    }
    userErrors {
      code
      field
      message
    }
    warnings {
      code
      message
    }
  }
}
${CART_FRAGMENT}`;

export const GET_CART_QUERY = `#graphql
query cart($cartId: ID!) {
  cart(id: $cartId) {
    ...Cart
  }
}
${CART_FRAGMENT}`;

export const ADD_CART_LINE_MUTATION = `#graphql
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ...Cart
    }
    userErrors {
      code
      field
      message
    }
    warnings {
      code
      message
    }
  }
}
${CART_FRAGMENT}`;

export const UPDATE_CART_MUTATION = `#graphql
mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      ...Cart
    }
    userErrors {
      code
      field
      message
    }
    warnings {
      code
      message
    }
  }
}
${CART_FRAGMENT}`;

export const REMOVE_CART_LINE_MUTATION = `#graphql
mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      ...Cart
    }
    userErrors {
      code
      field
      message
    }
    warnings {
      code
      message
    }
  }
}
${CART_FRAGMENT}`;
