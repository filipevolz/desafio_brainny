"use client"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import Apollo from "src/common/apollo"

interface ProviderProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProviderProps) => {

  return (
    <Apollo>
      <CacheProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </Apollo>
  )
}

export default Providers