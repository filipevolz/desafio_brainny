import React from "react";
import { Box, Flex, Link, List, ListItem, Spacer, Text } from "@chakra-ui/react";

export const HeaderLadingPage = () => {
  return (
    <Flex py={'45px'} alignItems={"center"}>
    <Box>
        <a href="/">
            <img src="/logo.png" alt="Logo PontoGo"/>
        </a>
    </Box>

    <Spacer/>

    <Box>
        <List display={"flex"} alignItems={"center"} gap="45px">
            <ListItem color={"#fff"}>
                <a href="#">Início</a>
            </ListItem>

            <ListItem color={"#fff"}>
                <a href="#plans">Planos</a>
            </ListItem>

            <Link href="/login"><ListItem color={"primary"}bgColor={"#fff"} borderRadius={"5px"} py={"14px"} px={"40px"}>
                Fazer login
            </ListItem></Link>
        </List>
    </Box>
</Flex>
  );
}
