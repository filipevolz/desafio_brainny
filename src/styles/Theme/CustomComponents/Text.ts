import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const Text = {
  variants: {
    h1: {
      //hero
      fontSize: pixelToRem(40),
      lineHeight: pixelToRem(60),
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
    },
    h2: {
      // h1
      fontSize: pixelToRem(30),
      lineHeight: pixelToRem(36),
      fontFamily: 'Poppins, sans-serif',
    },
    h3: {
      // h2
      fontSize: pixelToRem(24),
      lineHeight: pixelToRem(36),
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 300,
    },
    h4: {
      // h3
      fontSize: pixelToRem(18),
      lineHeight: pixelToRem(24),
      fontFamily: 'Poppins, sans-serif',
    },
    body1: {
      // body uppercase
      fontSize: pixelToRem(14),
      lineHeight: pixelToRem(20),
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'uppercase',
    },
    body2: {
      // body
      fontSize: pixelToRem(14),
      lineHeight: pixelToRem(20),
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'none',
    },
    subtitle1: {
      // paragraph uppercase
      fontSize: pixelToRem(25),
      lineHeight: pixelToRem(37.5),
      fontFamily: 'Poppins, sans-serif',
    },
    subtitle2: {
      // paragraph
      fontSize: pixelToRem(12),
      lineHeight: pixelToRem(16),
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'uppercase',
    },
    overline: {
      // overline
      fontWeight: 700,
      fontFamily: 'Poppins, sans-serif',
      fontSize: pixelToRem(10),
      lineHeight: pixelToRem(14),
      textTransform: 'uppercase',
    },
    overline2: {
      // overline2
      fontFamily: 'Poppins, sans-serif',
      fontSize: pixelToRem(10),
      lineHeight: pixelToRem(14),
    },
    button: {
      fontWeight: 700,
      fontFamily: 'Poppins, sans-serif',
      fontSize: pixelToRem(14),
      lineHeight: pixelToRem(20),
      letterSpacing: 'normal',
      textTransform: 'none',
    },
  },
}