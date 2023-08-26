"use client"

import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import InputField from 'src/atomic/atoms/InputField'
import { useLoginMutation } from 'src/features/auth/graphql/mutation.generated'

export default function Home() {

  const form = useForm({
    defaultValues: {
      email: '',
      password: ""
    }
  })

  const [login, { loading }] = useLoginMutation()



  const handleLogin = form.handleSubmit(async (values) => {
    console.log('Clicou')
    try {
      const { data } = await login({
        variables: {
          input: {
            identifier: values.email.trim(),
            password: values.password.trim()
          }
        }
      })

      alert(`Login realizado com sucesso ${data?.login?.user?.username}`)
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
            <Button onClick={handleLogin} isLoading={loading}>Login</Button>
          </Flex>
        </FormProvider>
      </Box>
    </main>
  )
}
