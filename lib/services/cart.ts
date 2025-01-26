import { browserClient } from "@/lib/shopify/client/browser";
import {
  ADD_CART_LINE_MUTATION,
  CREATE_CART_MUTATION,
  GET_CART_QUERY,
  REMOVE_CART_LINE_MUTATION,
  UPDATE_CART_MUTATION,
} from "@/lib/shopify/queries/cart";
import { logError } from "@/lib/utils/error-logger";

export async function createCart(merchandiseId: string, quantity = 1) {
  const { data, errors } = await browserClient.request(CREATE_CART_MUTATION, {
    variables: {
      input: {
        lines: [{ merchandiseId, quantity }],
      },
    },
  });

  if (errors?.graphQLErrors?.length) {
    logError(errors?.graphQLErrors, {
      request: CREATE_CART_MUTATION,
      variables: {
        input: {
          lines: [{ merchandiseId, quantity }],
        },
      },
    });
  }

  return {
    cart: data?.cartCreate?.cart || null,
    errors: errors?.graphQLErrors,
    warnings: data?.cartCreate?.warnings,
  };
}

export async function getCart(cartId: string) {
  const { data, errors } = await browserClient.request(GET_CART_QUERY, {
    variables: { cartId },
  });

  if (errors?.graphQLErrors?.length) {
    logError(errors?.graphQLErrors, {
      request: GET_CART_QUERY,
      variables: { cartId },
    });
  }

  return {
    cart: data?.cart || null,
    errors: errors?.graphQLErrors,
    warnings: data?.cart?.warnings,
  };
}

export async function addCartLine(
  cartId: string,
  merchandiseId: string,
  quantity = 1
) {
  const { data, errors } = await browserClient.request(ADD_CART_LINE_MUTATION, {
    variables: {
      cartId,
      lines: [{ merchandiseId, quantity }],
    },
  });

  if (errors?.graphQLErrors?.length) {
    logError(errors?.graphQLErrors, {
      request: ADD_CART_LINE_MUTATION,
      variables: {
        input: {
          cartId,
          lines: [{ merchandiseId, quantity }],
        },
      },
    });
  }

  return {
    cart: data?.cartLinesAdd?.cart || null,
    errors: errors?.graphQLErrors,
    warnings: data?.cartLinesAdd?.warnings,
  };
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  merchandiseId: string,
  quantity = 1
) {
  const { data, errors } = await browserClient.request(UPDATE_CART_MUTATION, {
    variables: {
      cartId,
      lines: [{ id: lineId, merchandiseId, quantity }],
    },
  });

  if (errors?.graphQLErrors?.length) {
    logError(errors?.graphQLErrors, {
      request: UPDATE_CART_MUTATION,
      variables: {
        input: {
          cartId,
          lines: [{ merchandiseId, quantity }],
        },
      },
    });
  }

  return {
    cart: data?.cartLinesUpdate?.cart || null,
    errors: errors?.graphQLErrors,
    warnings: data?.cartLinesUpdate?.warnings,
  };
}

export async function removeCartLine(cartId: string, lineId: string) {
  const { data, errors } = await browserClient.request(
    REMOVE_CART_LINE_MUTATION,
    {
      variables: {
        cartId,
        lineIds: [lineId],
      },
    }
  );

  if (errors?.graphQLErrors?.length) {
    logError(errors?.graphQLErrors, {
      request: REMOVE_CART_LINE_MUTATION,
      variables: {
        cartId,
        lineIds: [lineId],
      },
    });
  }

  return {
    cart: data?.cartLinesRemove?.cart || null,
    errors: errors?.graphQLErrors,
    warnings: data?.cartLinesRemove?.warnings,
  };
}
