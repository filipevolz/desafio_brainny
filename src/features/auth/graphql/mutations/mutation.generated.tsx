import * as Types from '../../../../generated/graphql.js';

import { gql } from '@apollo/client';
import { MeFieldsFragmentDoc } from '../fragments/fragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LoginMutationVariables = Types.Exact<{
  input: Types.UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email: string, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string, description?: string | null, type?: string | null } | null } } };


export const LoginDocument = gql`
    mutation login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      ...MeFields
    }
  }
}
    ${MeFieldsFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;