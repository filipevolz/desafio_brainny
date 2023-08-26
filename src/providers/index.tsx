"use client"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import ApolloProvider from "src/common/apollo"
import { AuthProvider } from "src/features/auth/context/UserAuthContext"
import { theme } from "src/styles/Theme"

interface ProviderProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProviderProps) => {

  return (
    <ApolloProvider>
      <AuthProvider>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default Providers