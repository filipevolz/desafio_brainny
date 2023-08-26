import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export const HeroLogin = () => {
  return (
    <Box maxW={'600px'} w={'50%'}>
      <Image src='/bg_login.png' />
      <Text color={'primary'} variant='h1' textAlign={'center'}>Bem vindo ao PontoGo</Text>
      <Text color={'primary'} variant='subtitle1' textAlign={'center'}>Aqui você fará toda gestão do <br />
        seu sistema de pontos.</Text>
    </Box>
  );
}
