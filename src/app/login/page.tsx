"use client"

import { Flex } from '@chakra-ui/react'
import { FormLogin } from 'src/atomic/organism/FormLogin'
import { HeroLogin } from 'src/atomic/organism/HeroLogin'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

export default function Page() {


  return (
    <Flex padding={pixelToRem(30)} flexWrap={'wrap'} h={['auto', '100vh']} bg='white' gap={[pixelToRem(30), pixelToRem(50), pixelToRem(150)]} justifyContent={'center'} alignItems={'center'}>
      <HeroLogin />
      <FormLogin />
    </Flex >
  )
}
