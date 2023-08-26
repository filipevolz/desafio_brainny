import * as Types from '../../../../generated/graphql.js';

import { gql } from '@apollo/client';
export type MeFieldsFragment = { __typename?: 'UsersPermissionsMe', id: string, username: string, email: string, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string, description?: string | null, type?: string | null } | null };

export const MeFieldsFragmentDoc = gql`
    fragment MeFields on UsersPermissionsMe {
  id
  username
  email
  confirmed
  blocked
  role {
    id
    name
    description
    type
  }
}
    `;