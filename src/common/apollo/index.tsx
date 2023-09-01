import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { getCookie } from '../cookies';
import createUploadLink from 'apollo-upload-client/public/createUploadLink.js'

interface ApolloContextProps {
  children: React.ReactNode;
}

const setAuthorizationLink = setContext(async () => {
  const token = getCookie(null, 'authToken')

  if (token) {
    return {
      headers: {
        authorization: 'Bearer ' + getCookie(null, 'authToken'),
      },
    }
  }
  return {}
})

const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  fetch: fetch,
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: setAuthorizationLink.concat(uploadLink),
  ssrMode: !process.browser,
});

const Apollo = ({ children }: ApolloContextProps) => {

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default Apollo
