import { Text as CHText, TextProps as CHTextProps } from "@chakra-ui/react"

type TextCustomProps =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'overline'
  | 'overline2'
  | 'button'


interface TextProps extends CHTextProps {
  children: React.ReactNode,
  variant?: TextCustomProps,
}

const Text = ({ children, variant, ...rest }: TextProps) => {
  return (
    <CHText color='primary' variant={variant} {...rest}>{children}</CHText>
  )
}

export default Text