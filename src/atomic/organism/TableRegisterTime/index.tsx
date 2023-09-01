import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { RegisterTimeFieldFragment } from "src/features/RegisterTime/graphql/fragments/fragments.generated";
import { pixelToRem } from "src/common/helpers/pixelToRem";
import { formatDate } from "src/common/helpers/formatDate";
import { formatHour } from "src/common/helpers/formatHour";
import { TableRegisterTimeSkeleton } from "./skeleton";
import { Identifier } from "src/atomic/atoms/Identifier";

interface TableRegisterTimeProps {
  data: (RegisterTimeFieldFragment | null)[];
  loading: boolean;
  numberSkeletonData?: number;
}

export const TableRegisterTime = ({ data, loading, numberSkeletonData = 10 }: TableRegisterTimeProps) => {

  return (
    <>
      {loading ? (
        <TableRegisterTimeSkeleton numberSkeletonData={numberSkeletonData} />
      ) : (
        <>
          {data?.map((registeredTime, index) => (
            <Grid
              templateAreas={`"data${index} time${index} hour${index}"`}
              gridTemplateColumns={"1fr 1fr 1fr"}
              bgColor={'white'}
              p={pixelToRem(8)}
              position={'relative'}
              border={'1px solid'}
              borderRadius={pixelToRem(5)}
              borderColor={'gray300'}
              alignItems={'center'}
            >
              <Box position={'absolute'}
                top={pixelToRem(7)}
                left={pixelToRem(15)}
                bottom={pixelToRem(7)}
                zIndex={1}
                borderLeft={'4px solid'}
                borderColor={'secondary'}
                borderRadius={pixelToRem(30)}
                height={'75%'}></Box>
              <Flex ml={[pixelToRem(15), pixelToRem(30), pixelToRem(60)]} gridArea={`data${index}`} flexDir={'column'}>
                <Text color='black' >{registeredTime?.user?.name}</Text>
                <Identifier id={registeredTime?.user?.id} />
              </Flex>
              <Text color='grey' gridArea={`time${index}`}>{formatDate(registeredTime?.timeRegistered)}</Text>
              <Text color='grey' gridArea={`hour${index}`}>{formatHour(registeredTime?.published_at)}</Text>
            </Grid>
          ))}
        </>
      )}
    </>
  );
}
