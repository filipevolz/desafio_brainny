import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

interface ApolloContextProps {
  children: React.ReactNode;
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

const Apollo = ({ children }: ApolloContextProps) => {

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default Apollo