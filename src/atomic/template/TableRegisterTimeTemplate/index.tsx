"use client"
import React from "react";

import {
  Flex,
  Grid,
} from "@chakra-ui/react"

import { useGetRegisteredTime } from "src/features/RegisterTime/hooks/useGetRegisterTime";
import { useMe } from "src/features/auth/hooks/useMe";
import { pixelToRem } from "src/common/helpers/pixelToRem";
import Text from "src/atomic/atoms/Text";
import { RegisterTimeModal } from "../../organism/RegisterTimeModal";
import { Pagination } from "src/atomic/organism/Pagination";
import debounce from 'lodash/debounce'
import { TableRegisterTime } from "src/atomic/organism/TableRegisterTime";

interface TableRegisterTimeTemplateProps {
  isAdmin?: boolean;
}

export const TableRegisterTimeTemplate = ({ isAdmin }: TableRegisterTimeTemplateProps) => {
  const { meData } = useMe();

  const { currentItems, currentPage, hasNextPage, loading, changePage } = useGetRegisteredTime(isAdmin ? undefined : meData?.id);

  const delayedPagination = debounce(async (number) => {
    changePage(number)
  }, 250)

  return (
    <Flex flexDir={'column'} mt={pixelToRem(20)} w={'100%'}>
      {!isAdmin && <RegisterTimeModal />}
      <Grid
        templateRows={"auto auto"}
        gap={4}
        fontWeight={'bold'}
        my={pixelToRem(30)}
        mb={0}
      >
        <Grid
          templateAreas={"'headerData headerTime headerHour'"}
          gridTemplateColumns={"1fr 1fr 1fr"}
          mb={0}
        >
          <Text gridArea="headerData" color={'black'}>Meus Registros</Text>
          <Text gridArea="headerTime" color={'black'}>Data</Text>
          <Text gridArea="headerHour" color={'black'}>Hora</Text>
        </Grid>
        <TableRegisterTime data={currentItems} loading={loading} />
      </Grid>
      <Pagination currentPage={currentPage} onPageChange={delayedPagination} hasNextPage={hasNextPage} />
    </Flex>
  );
}
