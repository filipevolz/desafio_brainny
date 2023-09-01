interface TableRegisterTimeSkeletonProps {
  numberSkeletonData?: number
}
import React from 'react'

import { Skeleton, SkeletonText } from 'src/atomic/atoms/Skeleton'
import { Grid } from '@chakra-ui/react'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const TableRegisterTimeSkeleton = ({ numberSkeletonData }: TableRegisterTimeSkeletonProps) => {
  const skeletonsData = new Array(numberSkeletonData).fill('')

  return (
    <>
      {skeletonsData?.map((index) => (
        <Grid
          templateAreas={`"data${index} time${index} hour${index}"`}
          gridTemplateColumns={"300px 300px 300px"}
          bgColor={'white'}
          p={pixelToRem(15)}
          position={'relative'}
          border={'1px solid'}
          borderRadius={pixelToRem(5)}
          borderColor={'gray300'}
          key={index}
        >
          <SkeletonText gridArea={`data${index}`} noOfLines={1}>skeleton name</SkeletonText>
          <SkeletonText gridArea={`time${index}`} noOfLines={1}>skeleton name</SkeletonText>
          <SkeletonText gridArea={`hour${index}`} noOfLines={1}>skeleton name</SkeletonText>
        </Grid>
      ))}
    </>
  )
}