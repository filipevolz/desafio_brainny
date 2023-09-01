import React from "react";
import { Flex, Spinner, SpinnerProps } from "@chakra-ui/react";

type LoadingProps = SpinnerProps

export const Loading = ({ ...rest }: LoadingProps) => {
  return (
    <Flex w={'full'} justifyContent={'center'}>
      <Spinner color="primary" {...rest} />
    </Flex>
  );
}
