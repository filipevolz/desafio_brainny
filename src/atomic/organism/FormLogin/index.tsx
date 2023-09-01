import React from "react";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Text } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "src/atomic/molecules/InputField";
import { Logo } from "src/atomic/atoms/Logo";
import { useUserAuthContext } from "src/features/auth/context/UserAuthContext";
import { pixelToRem } from "src/common/helpers/pixelToRem";

export const FormLogin = () => {

  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
      // email: 'admin@brainny.cc',
      // password: "adminregister"
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
    <Flex maxW={pixelToRem(400)} w='100%' flexDir={'column'} gap={[pixelToRem(10), pixelToRem(20), pixelToRem(30)]}>
      <Logo typeOfLogo='logoPurple' />
      <Text color={'primary'} variant={'h1'}>Faça login</Text>
      <FormProvider {...form}>
        <Flex flexDir={'column'} gap={pixelToRem(20)} maxW={'3xl'}>
          <InputField name={'email'} label="E-mail" type="text" placeholder="exemplo@email.com" />
          <InputField name={'password'} label="Senha" type="password" placeholder="*************" />
          <Text color='primary' textDecor={'underline'} cursor={'pointer'}>Esqueci minha senha</Text>
        </Flex>
      </FormProvider>
      <Button h={pixelToRem(50)} fontWeight={400} bg='primary' color='white' onClick={handleLogin} isLoading={isLoading}>Entrar</Button>
    </Flex>
  );
}
