"use client"

import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import InputField from 'src/atomic/atoms/InputField'
import { useUserAuthContext } from 'src/features/auth/context/UserAuthContext'

export default function Home() {

  const form = useForm({
    defaultValues: {
      email: 'admin@brainny.cc',
      password: "adminregister"
    }
  })

  const { authenticate, isLoading } = useUserAuthContext()

  const handleLogin = form.handleSubmit(async (values) => {
    try {
      await authenticate({
        input: {
          identifier: values.email.trim(),
          password: values.password.trim()
        }
      })
    } catch (err) {
      console.log(err)
    }
  })

  return (
    <main>
      <Box p={'10'}>
        <Text>Login</Text>
        <FormProvider {...form}>
          <Flex flexDir={'column'} gap={'30px'} maxW={'3xl'}>
            <InputField name={'email'} />
            <InputField name={'password'} />
            <Button onClick={handleLogin} isLoading={isLoading}>Login</Button>
          </Flex>
        </FormProvider>
      </Box>
    </main>
  )
}
