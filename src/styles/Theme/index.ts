import { Theme, extendTheme } from "@chakra-ui/react"
import { Colors } from "./colors"
import { fonts } from "./fonts"
import { Text } from "./CustomComponents/Text"

// theme.js
export const theme = extendTheme({
  colors: {
    ...Colors
  },
  fonts: {
    ...fonts
  },
  config: {
    initialColorMode: 'light',
  },
  components: {
    Text
  }
}) as Theme