"use client"

import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { FormLogin } from 'src/atomic/organism/FormLogin'
import { HeroLogin } from 'src/atomic/organism/HeroLogin'
import { getCookie } from 'src/common/cookies'
import { pixelToRem } from 'src/common/helpers/pixelToRem'
import { useMe } from 'src/features/auth/hooks/useMe'


export default function Page() {
  const { push } = useRouter()
  const { isAdmin } = useMe()

  useEffect(() => {
    const token = getCookie(null, 'authToken')
    if (token) {
      if (isAdmin) {
        push('/private/dashboard')
      } else {
        push('/private/meus-registros')
      }
    }
  }, [isAdmin, push])

  return (
    <Flex padding={pixelToRem(30)} flexWrap={'wrap'} h={['auto', '100vh']} bg='white' gap={[pixelToRem(30), pixelToRem(50), pixelToRem(150)]} justifyContent={'center'} alignItems={'center'}>
      <HeroLogin />
      <FormLogin />
    </Flex >
  )
}
