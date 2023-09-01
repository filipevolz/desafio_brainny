import * as Types from '../../../../generated/graphql.js';

import { gql } from '@apollo/client';
import { RegisterTimeFieldFragmentDoc } from '../fragments/fragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateRegisteredTimeMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CreateRegisteredTimeInput>;
}>;


export type CreateRegisteredTimeMutation = { __typename?: 'Mutation', createRegisteredTime?: { __typename?: 'createRegisteredTimePayload', registeredTime?: { __typename?: 'RegisteredTime', id: string, timeRegistered?: any | null, published_at?: any | null, user?: { __typename?: 'UsersPermissionsUser', id: string, name?: string | null } | null } | null } | null };


export const CreateRegisteredTimeDocument = gql`
    mutation createRegisteredTime($input: createRegisteredTimeInput) {
  createRegisteredTime(input: $input) {
    registeredTime {
      ...RegisterTimeField
    }
  }
}
    ${RegisterTimeFieldFragmentDoc}`;
export type CreateRegisteredTimeMutationFn = Apollo.MutationFunction<CreateRegisteredTimeMutation, CreateRegisteredTimeMutationVariables>;

/**
 * __useCreateRegisteredTimeMutation__
 *
 * To run a mutation, you first call `useCreateRegisteredTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegisteredTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegisteredTimeMutation, { data, loading, error }] = useCreateRegisteredTimeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRegisteredTimeMutation(baseOptions?: Apollo.MutationHookOptions<CreateRegisteredTimeMutation, CreateRegisteredTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRegisteredTimeMutation, CreateRegisteredTimeMutationVariables>(CreateRegisteredTimeDocument, options);
      }
export type CreateRegisteredTimeMutationHookResult = ReturnType<typeof useCreateRegisteredTimeMutation>;
export type CreateRegisteredTimeMutationResult = Apollo.MutationResult<CreateRegisteredTimeMutation>;
export type CreateRegisteredTimeMutationOptions = Apollo.BaseMutationOptions<CreateRegisteredTimeMutation, CreateRegisteredTimeMutationVariables>;