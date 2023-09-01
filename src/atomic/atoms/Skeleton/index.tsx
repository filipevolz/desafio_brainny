import React from 'react'

import {
  Skeleton as CHSkeleton,
  SkeletonCircle as CHSkeletonCircle,
  SkeletonProps,
  SkeletonText as CHSkeletonText,
  SkeletonTextProps,
  Stack,
} from '@chakra-ui/react'

interface SkeletonTypes extends SkeletonProps {
  numberSkeletonData?: number
}

type SkeletonTextType = SkeletonTextProps

export const Skeleton = ({
  numberSkeletonData = 1,
  ...rest
}: SkeletonTypes) => {
  const skeletonsData = new Array(numberSkeletonData).fill('')

  return (
    <Stack spacing={5} flex={1}>
      {skeletonsData?.map((item, index) => (
        <CHSkeleton key={index} width="100%" h={50} {...rest} />
      ))}
    </Stack>
  )
}

export const SkeletonCircle = ({ ...rest }: SkeletonTypes) => {
  return <CHSkeletonCircle {...rest} />
}

export const SkeletonText = ({ ...rest }: SkeletonTextType) => {
  return <CHSkeletonText {...rest} />
}
