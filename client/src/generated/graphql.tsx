import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Float'];
  title: Scalars['String'];
  body_html: Scalars['String'];
  published_at: Scalars['String'];
  vendor: Scalars['String'];
  product_type: Scalars['String'];
  tags: Array<Scalars['String']>;
  variants: Array<Variant>;
};

export type FeaturedImage = {
  __typename?: 'FeaturedImage';
  id: Scalars['Float'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
};

export type Variant = {
  __typename?: 'Variant';
  sku: Scalars['String'];
  featured_image: FeaturedImage;
  price: Scalars['String'];
  grams: Scalars['Float'];
};

export type Participant = {
  __typename?: 'Participant';
  _id: Scalars['String'];
  balance: Scalars['String'];
  company: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  picture: Scalars['String'];
  purchases: Scalars['String'];
};

export type BuyingParticipants = {
  __typename?: 'BuyingParticipants';
  buyingParticipants: Array<Participant>;
  totalPurchases: Scalars['Float'];
  totalBalances: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getAllProducts: Array<Product>;
  getPurchasedProducts: Array<Product>;
  getAllParticpants: Array<Participant>;
  getBuyingParticpants: BuyingParticipants;
};

export type GetBuyingParticipantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBuyingParticipantsQuery = (
  { __typename?: 'Query' }
  & { getBuyingParticpants: (
    { __typename?: 'BuyingParticipants' }
    & Pick<BuyingParticipants, 'totalPurchases' | 'totalBalances'>
    & { buyingParticipants: Array<(
      { __typename?: 'Participant' }
      & Pick<Participant, '_id' | 'balance' | 'company' | 'email' | 'name' | 'phone' | 'picture' | 'purchases'>
    )> }
  ) }
);

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { getAllProducts: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'body_html' | 'id' | 'product_type' | 'published_at' | 'tags' | 'title' | 'vendor'>
    & { variants: Array<(
      { __typename?: 'Variant' }
      & Pick<Variant, 'grams' | 'price' | 'sku'>
      & { featured_image: (
        { __typename?: 'FeaturedImage' }
        & Pick<FeaturedImage, 'height' | 'id' | 'width' | 'src'>
      ) }
    )> }
  )> }
);

export type GetParticipantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetParticipantsQuery = (
  { __typename?: 'Query' }
  & { getAllParticpants: Array<(
    { __typename?: 'Participant' }
    & Pick<Participant, '_id' | 'balance' | 'company' | 'email' | 'name' | 'phone' | 'picture' | 'purchases'>
  )> }
);

export type GetPurchasedProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPurchasedProductsQuery = (
  { __typename?: 'Query' }
  & { getPurchasedProducts: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'body_html' | 'published_at' | 'vendor' | 'product_type' | 'tags'>
    & { variants: Array<(
      { __typename?: 'Variant' }
      & Pick<Variant, 'sku' | 'price' | 'grams'>
      & { featured_image: (
        { __typename?: 'FeaturedImage' }
        & Pick<FeaturedImage, 'id' | 'src' | 'width' | 'height'>
      ) }
    )> }
  )> }
);


export const GetBuyingParticipantsDocument = gql`
    query GetBuyingParticipants {
  getBuyingParticpants {
    buyingParticipants {
      _id
      balance
      company
      email
      name
      phone
      picture
      purchases
    }
    totalPurchases
    totalBalances
  }
}
    `;

/**
 * __useGetBuyingParticipantsQuery__
 *
 * To run a query within a React component, call `useGetBuyingParticipantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBuyingParticipantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBuyingParticipantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBuyingParticipantsQuery(baseOptions?: Apollo.QueryHookOptions<GetBuyingParticipantsQuery, GetBuyingParticipantsQueryVariables>) {
        return Apollo.useQuery<GetBuyingParticipantsQuery, GetBuyingParticipantsQueryVariables>(GetBuyingParticipantsDocument, baseOptions);
      }
export function useGetBuyingParticipantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBuyingParticipantsQuery, GetBuyingParticipantsQueryVariables>) {
          return Apollo.useLazyQuery<GetBuyingParticipantsQuery, GetBuyingParticipantsQueryVariables>(GetBuyingParticipantsDocument, baseOptions);
        }
export type GetBuyingParticipantsQueryHookResult = ReturnType<typeof useGetBuyingParticipantsQuery>;
export type GetBuyingParticipantsLazyQueryHookResult = ReturnType<typeof useGetBuyingParticipantsLazyQuery>;
export type GetBuyingParticipantsQueryResult = Apollo.QueryResult<GetBuyingParticipantsQuery, GetBuyingParticipantsQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  getAllProducts {
    body_html
    id
    product_type
    published_at
    tags
    title
    variants {
      featured_image {
        height
        id
        width
        src
      }
      grams
      price
      sku
    }
    vendor
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetParticipantsDocument = gql`
    query GetParticipants {
  getAllParticpants {
    _id
    balance
    company
    email
    name
    phone
    picture
    purchases
  }
}
    `;

/**
 * __useGetParticipantsQuery__
 *
 * To run a query within a React component, call `useGetParticipantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParticipantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParticipantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetParticipantsQuery(baseOptions?: Apollo.QueryHookOptions<GetParticipantsQuery, GetParticipantsQueryVariables>) {
        return Apollo.useQuery<GetParticipantsQuery, GetParticipantsQueryVariables>(GetParticipantsDocument, baseOptions);
      }
export function useGetParticipantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetParticipantsQuery, GetParticipantsQueryVariables>) {
          return Apollo.useLazyQuery<GetParticipantsQuery, GetParticipantsQueryVariables>(GetParticipantsDocument, baseOptions);
        }
export type GetParticipantsQueryHookResult = ReturnType<typeof useGetParticipantsQuery>;
export type GetParticipantsLazyQueryHookResult = ReturnType<typeof useGetParticipantsLazyQuery>;
export type GetParticipantsQueryResult = Apollo.QueryResult<GetParticipantsQuery, GetParticipantsQueryVariables>;
export const GetPurchasedProductsDocument = gql`
    query GetPurchasedProducts {
  getPurchasedProducts {
    id
    title
    body_html
    published_at
    vendor
    product_type
    tags
    variants {
      sku
      featured_image {
        id
        src
        width
        height
      }
      price
      grams
    }
  }
}
    `;

/**
 * __useGetPurchasedProductsQuery__
 *
 * To run a query within a React component, call `useGetPurchasedProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPurchasedProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPurchasedProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPurchasedProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetPurchasedProductsQuery, GetPurchasedProductsQueryVariables>) {
        return Apollo.useQuery<GetPurchasedProductsQuery, GetPurchasedProductsQueryVariables>(GetPurchasedProductsDocument, baseOptions);
      }
export function useGetPurchasedProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPurchasedProductsQuery, GetPurchasedProductsQueryVariables>) {
          return Apollo.useLazyQuery<GetPurchasedProductsQuery, GetPurchasedProductsQueryVariables>(GetPurchasedProductsDocument, baseOptions);
        }
export type GetPurchasedProductsQueryHookResult = ReturnType<typeof useGetPurchasedProductsQuery>;
export type GetPurchasedProductsLazyQueryHookResult = ReturnType<typeof useGetPurchasedProductsLazyQuery>;
export type GetPurchasedProductsQueryResult = Apollo.QueryResult<GetPurchasedProductsQuery, GetPurchasedProductsQueryVariables>;