import React from "react";
import { Text } from "@chakra-ui/react";

interface IdentifierProps {
  id?: string;
}

export const Identifier = ({ id }: IdentifierProps) => {

  //TRANSFORM ID ID = "1" => "001" => "10" "010" => "100" => "100 "1000" => "1000" ...

  const transformId = id?.toString().padStart(3, "0");

  return (
    <Text p={0} m={0} color='grey'>{transformId}</Text>
  );
}
