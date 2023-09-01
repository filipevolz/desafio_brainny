import React from "react";
import { Image, ImageProps } from "@chakra-ui/react";

interface LogoProps extends ImageProps {
  typeOfLogo?: "logoPurple" | "logoWhite" | "logoBlack"
}

export const Logo = ({ typeOfLogo = "logoPurple", ...rest }: LogoProps) => {

  const configLogo = {
    logoPurple: {
      src: "/logoPurple.svg",
    },
    logoWhite: {
      src: "/logoWhite.svg",
    },
    logoBlack: {
      src: "/logoBlack.svg",
    }
  }

  return (
    <Image maxW={'320px'} src={configLogo[typeOfLogo].src} alt="PontoGO logo" {...rest} />
  );
}
