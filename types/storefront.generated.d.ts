/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type CartCreateMutationVariables = StorefrontTypes.Exact<{
  input: StorefrontTypes.CartInput;
}>;


export type CartCreateMutation = { cartCreate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'quantityAvailable'>
              & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, product: Pick<StorefrontTypes.Product, 'title'> }
            ) }
          ) }> }, cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
    )>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'code' | 'field' | 'message'>>, warnings: Array<Pick<StorefrontTypes.CartWarning, 'code' | 'message'>> }> };

export type CartQueryVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
}>;


export type CartQuery = { cart?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl'>
    & { lines: { edges: Array<{ node: (
          Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
          & { merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'quantityAvailable'>
            & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, product: Pick<StorefrontTypes.Product, 'title'> }
          ) }
        ) }> }, cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
  )> };

export type CartLinesAddMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineInput> | StorefrontTypes.CartLineInput;
}>;


export type CartLinesAddMutation = { cartLinesAdd?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'quantityAvailable'>
              & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, product: Pick<StorefrontTypes.Product, 'title'> }
            ) }
          ) }> }, cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
    )>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'code' | 'field' | 'message'>>, warnings: Array<Pick<StorefrontTypes.CartWarning, 'code' | 'message'>> }> };

export type CartLinesUpdateMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineUpdateInput> | StorefrontTypes.CartLineUpdateInput;
}>;


export type CartLinesUpdateMutation = { cartLinesUpdate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'quantityAvailable'>
              & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, product: Pick<StorefrontTypes.Product, 'title'> }
            ) }
          ) }> }, cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
    )>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'code' | 'field' | 'message'>>, warnings: Array<Pick<StorefrontTypes.CartWarning, 'code' | 'message'>> }> };

export type CartLinesRemoveMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lineIds: Array<StorefrontTypes.Scalars['ID']['input']> | StorefrontTypes.Scalars['ID']['input'];
}>;


export type CartLinesRemoveMutation = { cartLinesRemove?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'quantityAvailable'>
              & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, product: Pick<StorefrontTypes.Product, 'title'> }
            ) }
          ) }> }, cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
    )>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'code' | 'field' | 'message'>>, warnings: Array<Pick<StorefrontTypes.CartWarning, 'code' | 'message'>> }> };

export type CollectionsQueryVariables = StorefrontTypes.Exact<{
  first: StorefrontTypes.Scalars['Int']['input'];
  after?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
  productsFirst: StorefrontTypes.Scalars['Int']['input'];
  productsAfter?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
}>;


export type CollectionsQuery = { collections: { pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage' | 'endCursor'>, edges: Array<(
      Pick<StorefrontTypes.CollectionEdge, 'cursor'>
      & { node: (
        Pick<StorefrontTypes.Collection, 'id' | 'title' | 'handle' | 'description' | 'descriptionHtml' | 'updatedAt'>
        & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'altText' | 'url'>>, metafield?: StorefrontTypes.Maybe<{ reference?: StorefrontTypes.Maybe<{ image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }> }>, sortOrder?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>>, products: { pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage' | 'endCursor'>, edges: Array<(
            Pick<StorefrontTypes.ProductEdge, 'cursor'>
            & { node: (
              Pick<StorefrontTypes.Product, 'id' | 'title' | 'handle' | 'description' | 'updatedAt'>
              & { collections: { edges: Array<{ node: (
                    Pick<StorefrontTypes.Collection, 'title' | 'handle'>
                    & { metafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>> }
                  ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'altText' | 'url'>>, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
            ) }
          )> }, seo: Pick<StorefrontTypes.Seo, 'title' | 'description'> }
      ) }
    )> } };

export type CollectionByHandleQueryVariables = StorefrontTypes.Exact<{
  handle: StorefrontTypes.Scalars['String']['input'];
  productsFirst: StorefrontTypes.Scalars['Int']['input'];
  productsAfter?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
}>;


export type CollectionByHandleQuery = { collection?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Collection, 'id' | 'title' | 'handle' | 'description' | 'descriptionHtml'>
    & { metafield?: StorefrontTypes.Maybe<{ reference?: StorefrontTypes.Maybe<{ image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }> }>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'altText' | 'url'>>, products: { pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage' | 'endCursor'>, edges: Array<(
        Pick<StorefrontTypes.ProductEdge, 'cursor'>
        & { node: (
          Pick<StorefrontTypes.Product, 'id' | 'title' | 'handle' | 'description' | 'updatedAt'>
          & { collections: { edges: Array<{ node: (
                Pick<StorefrontTypes.Collection, 'title' | 'handle'>
                & { metafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>> }
              ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'altText' | 'url'>>, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
        ) }
      )> }, seo: Pick<StorefrontTypes.Seo, 'title' | 'description'> }
  )> };

export type ProductCardFragment = (
  Pick<StorefrontTypes.Product, 'id' | 'title' | 'handle' | 'description' | 'updatedAt'>
  & { collections: { edges: Array<{ node: (
        Pick<StorefrontTypes.Collection, 'title' | 'handle'>
        & { metafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>> }
      ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'altText' | 'url'>>, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
);

export type ImageFragment = Pick<StorefrontTypes.Image, 'id' | 'altText' | 'url'>;

export type SeoFragment = Pick<StorefrontTypes.Seo, 'title' | 'description'>;

export type MoneyFragment = Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>;

export type CartLineFragment = (
  Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
  & { merchandise: (
    Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'quantityAvailable'>
    & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, product: Pick<StorefrontTypes.Product, 'title'> }
  ) }
);

export type CartFragment = (
  Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl'>
  & { lines: { edges: Array<{ node: (
        Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
        & { merchandise: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'quantityAvailable'>
          & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, product: Pick<StorefrontTypes.Product, 'title'> }
        ) }
      ) }> }, cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
);

export type ProductsQueryVariables = StorefrontTypes.Exact<{
  first: StorefrontTypes.Scalars['Int']['input'];
  after?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
  sortKey?: StorefrontTypes.InputMaybe<StorefrontTypes.ProductSortKeys>;
}>;


export type ProductsQuery = { products: { pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage' | 'endCursor'>, edges: Array<(
      Pick<StorefrontTypes.ProductEdge, 'cursor'>
      & { node: (
        Pick<StorefrontTypes.Product, 'description' | 'id' | 'title' | 'handle' | 'updatedAt'>
        & { collections: { edges: Array<{ node: (
              Pick<StorefrontTypes.Collection, 'title' | 'handle'>
              & { products: { edges: Array<{ node: (
                    Pick<StorefrontTypes.Product, 'id' | 'title' | 'handle' | 'description' | 'updatedAt'>
                    & { metafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>>, collections: { edges: Array<{ node: (
                          Pick<StorefrontTypes.Collection, 'title' | 'handle'>
                          & { metafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>> }
                        ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'altText' | 'url'>>, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
                  ) }> }, metafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>> }
            ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'altText' | 'url'>>, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
      ) }
    )> } };

export type ProductByHandleQueryVariables = StorefrontTypes.Exact<{
  handle: StorefrontTypes.Scalars['String']['input'];
}>;


export type ProductByHandleQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'availableForSale' | 'description' | 'descriptionHtml' | 'tags' | 'totalInventory' | 'id' | 'title' | 'handle' | 'updatedAt'>
    & { collections: { edges: Array<{ node: (
          Pick<StorefrontTypes.Collection, 'title' | 'handle'>
          & { products: { edges: Array<{ node: (
                Pick<StorefrontTypes.Product, 'id' | 'title' | 'handle' | 'description' | 'updatedAt'>
                & { collections: { edges: Array<{ node: (
                      Pick<StorefrontTypes.Collection, 'title' | 'handle'>
                      & { metafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'altText' | 'url'>>, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
              ) }> }, metafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>> }
        ) }> }, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'id' | 'altText' | 'url'> }> }, options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, seo: Pick<StorefrontTypes.Seo, 'title' | 'description'>, variants: { edges: Array<{ node: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale' | 'sku' | 'quantityAvailable'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'altText' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }
        ) }> }, metafields: Array<StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'key' | 'value'>>>, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'altText' | 'url'>>, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, compareAtPriceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }
  )> };

interface GeneratedQueryTypes {
  "#graphql\nquery cart($cartId: ID!) {\n  cart(id: $cartId) {\n    ...Cart\n  }\n}\n#graphql\n  fragment Cart on Cart {\n    id\n    checkoutUrl\n    lines(first: 100) {\n      edges {\n        node {\n          ...CartLine\n        }\n      }\n    }\n    cost {\n      subtotalAmount {\n        ...Money\n      }\n      totalAmount {\n        ...Money\n      }\n    }\n  }\n  #graphql\n  fragment CartLine on CartLine {\n    id\n    quantity\n    merchandise {\n      ... on ProductVariant {\n        id\n        title\n        image {\n          url\n          altText\n        }\n        price {\n          ...Money\n        }\n        product {\n          title\n        }\n          quantityAvailable\n      }\n    }\n  }\n  #graphql\n  fragment Money on MoneyV2 {\n    amount\n    currencyCode\n  }\n\n\n": {return: CartQuery, variables: CartQueryVariables},
  "#graphql\n  #graphql\n  fragment Image on Image {\n    id\n    altText\n    url\n  }\n\n  #graphql\n  fragment ProductCard on Product {\n    id\n    title\n    handle\n    collections(first: 10) {\n      edges {\n        node {\n          title\n          handle\n          metafield(namespace:\"custom\",key: \"sort_order\") {\n            value\n          }\n        }\n      }\n    }\n    description\n    featuredImage {\n      altText\n      url(transform: { preferredContentType: WEBP })\n    }\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    updatedAt\n  }\n\n  #graphql\n  fragment Seo on SEO {\n    title\n    description\n  }\n\n\n  query Collections($first: Int!, $after: String, $productsFirst: Int!, $productsAfter: String) {\n    collections(first: $first, after: $after, sortKey: TITLE) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          id\n          title\n          handle\n          description\n          descriptionHtml\n          updatedAt\n          image {\n            ...Image\n          }\n          metafield(namespace:\"custom\",key: \"mobile_image\") {\n            reference {\n              ... on MediaImage {\n                image {\n                  url\n                  altText\n                }\n              }\n            }\n          }\n          sortOrder: metafield(namespace:\"custom\",key: \"sort_order\") {\n            value\n          }\n          products(first: $productsFirst, after: $productsAfter) {\n            pageInfo {\n              hasNextPage\n              endCursor\n            }\n            edges {\n              cursor\n              node {\n                ...ProductCard\n              }\n            }\n          }\n          seo {\n            ...Seo\n          }\n        }\n      }\n    }\n  }\n": {return: CollectionsQuery, variables: CollectionsQueryVariables},
  "#graphql\n  #graphql\n  fragment Image on Image {\n    id\n    altText\n    url\n  }\n\n  #graphql\n  fragment ProductCard on Product {\n    id\n    title\n    handle\n    collections(first: 10) {\n      edges {\n        node {\n          title\n          handle\n          metafield(namespace:\"custom\",key: \"sort_order\") {\n            value\n          }\n        }\n      }\n    }\n    description\n    featuredImage {\n      altText\n      url(transform: { preferredContentType: WEBP })\n    }\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    updatedAt\n  }\n\n  #graphql\n  fragment Seo on SEO {\n    title\n    description\n  }\n\n\n  query CollectionByHandle($handle: String!, $productsFirst: Int!, $productsAfter: String) {\n    collection(handle: $handle) {\n      id\n      title\n      handle\n      description\n      descriptionHtml\n      metafield(namespace:\"custom\",key: \"mobile_image\") {\n        reference {\n          ... on MediaImage {\n            image {\n              url\n              altText\n            }\n          }\n        }\n      }\n      image {\n        ...Image\n      }\n      products(first: $productsFirst, after: $productsAfter) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        edges {\n          cursor\n          node {\n            ...ProductCard\n          }\n        }\n      }\n      seo {\n        ...Seo\n      }\n    }\n  }\n": {return: CollectionByHandleQuery, variables: CollectionByHandleQueryVariables},
  "#graphql\n  #graphql\n  fragment ProductCard on Product {\n    id\n    title\n    handle\n    collections(first: 10) {\n      edges {\n        node {\n          title\n          handle\n          metafield(namespace:\"custom\",key: \"sort_order\") {\n            value\n          }\n        }\n      }\n    }\n    description\n    featuredImage {\n      altText\n      url(transform: { preferredContentType: WEBP })\n    }\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    updatedAt\n  }\n\n\n  query Products($first: Int!, $after: String, $sortKey: ProductSortKeys) {\n    products(first: $first, after: $after, sortKey: $sortKey) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          ...ProductCard\n          description\n          collections(first: 10) {\n            edges {\n              node {\n                title\n                handle\n                products(first: 4, sortKey: BEST_SELLING, reverse: true) {\n                  edges {\n                    node {\n                      ...ProductCard\n                      metafield(namespace:\"custom\",key: \"sort_order\") {\n                        value\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": {return: ProductsQuery, variables: ProductsQueryVariables},
  "#graphql\n  #graphql\n  fragment ProductCard on Product {\n    id\n    title\n    handle\n    collections(first: 10) {\n      edges {\n        node {\n          title\n          handle\n          metafield(namespace:\"custom\",key: \"sort_order\") {\n            value\n          }\n        }\n      }\n    }\n    description\n    featuredImage {\n      altText\n      url(transform: { preferredContentType: WEBP })\n    }\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    updatedAt\n  }\n\n  #graphql\n  fragment Image on Image {\n    id\n    altText\n    url\n  }\n\n  #graphql\n  fragment Seo on SEO {\n    title\n    description\n  }\n\n\n  query ProductByHandle($handle: String!) {\n    product(handle: $handle) {\n      ...ProductCard\n      availableForSale\n      description\n      descriptionHtml\n      tags\n      collections(first: 10) {\n        edges {\n          node {\n            products(first: 4, sortKey: BEST_SELLING, reverse: true) {\n              edges {\n                node {\n                  ...ProductCard\n                }\n              }\n            }\n            title\n            handle\n            metafield(namespace:\"custom\",key: \"sort_order\") {\n              value\n            }\n          }\n        }\n      }\n      images(first: 16) {\n        edges {\n          node {\n            ...Image\n          }\n        }\n      }\n      options {\n        id\n        name\n        values\n      }\n      seo {\n        ...Seo\n      }\n      variants(first: 100) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n            sku\n            quantityAvailable\n            selectedOptions {\n              name\n              value\n            }\n            image {\n              ...Image\n            }\n            price {\n              amount\n              currencyCode\n            }\n            compareAtPrice {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n      totalInventory\n      metafields(identifiers: [\n      {namespace: \"custom\", key: \"key_features\"},\n      {namespace: \"custom\", key: \"specification\"},\n      {namespace: \"custom\", key: \"whats_included\"},\n      {namespace: \"custom\", key: \"care_maintenance\"},\n      {namespace: \"custom\", key: \"additional_information\"},\n      {namespace: \"custom\", key: \"shipping_date\"},\n      ]) {\n        id\n        key\n        value\n      }\n    }\n  }\n": {return: ProductByHandleQuery, variables: ProductByHandleQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\nmutation cartCreate($input: CartInput!) {\n  cartCreate(input: $input) {\n    cart {\n      ...Cart\n    }\n    userErrors {\n      code\n      field\n      message\n    }\n    warnings {\n      code\n      message\n    }\n  }\n}\n#graphql\n  fragment Cart on Cart {\n    id\n    checkoutUrl\n    lines(first: 100) {\n      edges {\n        node {\n          ...CartLine\n        }\n      }\n    }\n    cost {\n      subtotalAmount {\n        ...Money\n      }\n      totalAmount {\n        ...Money\n      }\n    }\n  }\n  #graphql\n  fragment CartLine on CartLine {\n    id\n    quantity\n    merchandise {\n      ... on ProductVariant {\n        id\n        title\n        image {\n          url\n          altText\n        }\n        price {\n          ...Money\n        }\n        product {\n          title\n        }\n          quantityAvailable\n      }\n    }\n  }\n  #graphql\n  fragment Money on MoneyV2 {\n    amount\n    currencyCode\n  }\n\n\n": {return: CartCreateMutation, variables: CartCreateMutationVariables},
  "#graphql\nmutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n  cartLinesAdd(cartId: $cartId, lines: $lines) {\n    cart {\n      ...Cart\n    }\n    userErrors {\n      code\n      field\n      message\n    }\n    warnings {\n      code\n      message\n    }\n  }\n}\n#graphql\n  fragment Cart on Cart {\n    id\n    checkoutUrl\n    lines(first: 100) {\n      edges {\n        node {\n          ...CartLine\n        }\n      }\n    }\n    cost {\n      subtotalAmount {\n        ...Money\n      }\n      totalAmount {\n        ...Money\n      }\n    }\n  }\n  #graphql\n  fragment CartLine on CartLine {\n    id\n    quantity\n    merchandise {\n      ... on ProductVariant {\n        id\n        title\n        image {\n          url\n          altText\n        }\n        price {\n          ...Money\n        }\n        product {\n          title\n        }\n          quantityAvailable\n      }\n    }\n  }\n  #graphql\n  fragment Money on MoneyV2 {\n    amount\n    currencyCode\n  }\n\n\n": {return: CartLinesAddMutation, variables: CartLinesAddMutationVariables},
  "#graphql\nmutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n  cartLinesUpdate(cartId: $cartId, lines: $lines) {\n    cart {\n      ...Cart\n    }\n    userErrors {\n      code\n      field\n      message\n    }\n    warnings {\n      code\n      message\n    }\n  }\n}\n#graphql\n  fragment Cart on Cart {\n    id\n    checkoutUrl\n    lines(first: 100) {\n      edges {\n        node {\n          ...CartLine\n        }\n      }\n    }\n    cost {\n      subtotalAmount {\n        ...Money\n      }\n      totalAmount {\n        ...Money\n      }\n    }\n  }\n  #graphql\n  fragment CartLine on CartLine {\n    id\n    quantity\n    merchandise {\n      ... on ProductVariant {\n        id\n        title\n        image {\n          url\n          altText\n        }\n        price {\n          ...Money\n        }\n        product {\n          title\n        }\n          quantityAvailable\n      }\n    }\n  }\n  #graphql\n  fragment Money on MoneyV2 {\n    amount\n    currencyCode\n  }\n\n\n": {return: CartLinesUpdateMutation, variables: CartLinesUpdateMutationVariables},
  "#graphql\nmutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {\n  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n    cart {\n      ...Cart\n    }\n    userErrors {\n      code\n      field\n      message\n    }\n    warnings {\n      code\n      message\n    }\n  }\n}\n#graphql\n  fragment Cart on Cart {\n    id\n    checkoutUrl\n    lines(first: 100) {\n      edges {\n        node {\n          ...CartLine\n        }\n      }\n    }\n    cost {\n      subtotalAmount {\n        ...Money\n      }\n      totalAmount {\n        ...Money\n      }\n    }\n  }\n  #graphql\n  fragment CartLine on CartLine {\n    id\n    quantity\n    merchandise {\n      ... on ProductVariant {\n        id\n        title\n        image {\n          url\n          altText\n        }\n        price {\n          ...Money\n        }\n        product {\n          title\n        }\n          quantityAvailable\n      }\n    }\n  }\n  #graphql\n  fragment Money on MoneyV2 {\n    amount\n    currencyCode\n  }\n\n\n": {return: CartLinesRemoveMutation, variables: CartLinesRemoveMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
