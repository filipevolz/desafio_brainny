import * as Types from '../../../../generated/graphql.js';

import { gql } from '@apollo/client';
export type RegisterTimeFieldFragment = { __typename?: 'RegisteredTime', id: string, timeRegistered?: any | null, published_at?: any | null, user?: { __typename?: 'UsersPermissionsUser', id: string, name?: string | null } | null };

export const RegisterTimeFieldFragmentDoc = gql`
    fragment RegisterTimeField on RegisteredTime {
  id
  timeRegistered
  published_at
  user {
    id
    name
  }
}
    `;