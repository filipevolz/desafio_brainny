"use client"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import ApolloProvider from "src/common/apollo"
import { AuthProvider } from "src/features/auth/context/UserAuthContext"

interface ProviderProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProviderProps) => {

  return (
    <ApolloProvider>
      <AuthProvider>
        <CacheProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default Providers