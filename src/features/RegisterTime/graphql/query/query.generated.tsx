import * as Types from '../../../../generated/graphql.js';

import { gql } from '@apollo/client';
import { RegisterTimeFieldFragmentDoc } from '../fragments/fragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RegisteredTimesQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  publicationState: Types.PublicationState;
}>;


export type RegisteredTimesQuery = { __typename?: 'Query', registeredTimes?: Array<{ __typename?: 'RegisteredTime', id: string, timeRegistered?: any | null, published_at?: any | null, user?: { __typename?: 'UsersPermissionsUser', id: string, name?: string | null } | null } | null> | null };


export const RegisteredTimesDocument = gql`
    query registeredTimes($where: JSON, $sort: String, $limit: Int, $start: Int, $publicationState: PublicationState!) {
  registeredTimes(
    where: $where
    sort: $sort
    limit: $limit
    start: $start
    publicationState: $publicationState
  ) {
    ...RegisterTimeField
  }
}
    ${RegisterTimeFieldFragmentDoc}`;

/**
 * __useRegisteredTimesQuery__
 *
 * To run a query within a React component, call `useRegisteredTimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRegisteredTimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegisteredTimesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useRegisteredTimesQuery(baseOptions: Apollo.QueryHookOptions<RegisteredTimesQuery, RegisteredTimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RegisteredTimesQuery, RegisteredTimesQueryVariables>(RegisteredTimesDocument, options);
      }
export function useRegisteredTimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RegisteredTimesQuery, RegisteredTimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RegisteredTimesQuery, RegisteredTimesQueryVariables>(RegisteredTimesDocument, options);
        }
export type RegisteredTimesQueryHookResult = ReturnType<typeof useRegisteredTimesQuery>;
export type RegisteredTimesLazyQueryHookResult = ReturnType<typeof useRegisteredTimesLazyQuery>;
export type RegisteredTimesQueryResult = Apollo.QueryResult<RegisteredTimesQuery, RegisteredTimesQueryVariables>;