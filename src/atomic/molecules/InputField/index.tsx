import { FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputProps, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { useController } from "react-hook-form"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { pixelToRem } from "src/common/helpers/pixelToRem"

interface InputFieldProps extends InputProps {
  name: string
  label?: string
  isRequired?: boolean
}

const InputField = ({ name, isRequired, label, type, ...rest }: InputFieldProps) => {

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
  });

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl isRequired={isRequired ? true : false}
      isInvalid={error ? true : false}>
      {label && (
        <FormLabel
          htmlFor={name}
          fontSize={[pixelToRem(14), pixelToRem(16), pixelToRem(20)]}
          color="gray"
        >
          {label}
        </FormLabel>
      )}
      <InputGroup size="lg">
        <Input
          id={name}
          type={type === 'password' ? show ? 'text' : 'password' : type}
          borderWidth={1}
          borderColor="gray300"
          fontSize={16}
          color="gray2"
          rounded={5}
          variant="filled"
          errorBorderColor="red.300"
          _placeholder={{
            color: "gray300"
          }}
          size="lg"
          {...field}
          {...rest}
        />
        {type === 'password' && (
          <InputRightElement w={pixelToRem(24)} mr={pixelToRem(20)}>
            <IconButton
              bg={'none'}
              _hover={{ bg: 'none' }}
              _focus={{ bg: 'none' }}
              fontSize={pixelToRem(24)}
              onClick={handleClick}
              aria-label={'Show password'}
              color={'primary'}
              icon={show ? <AiFillEye /> : <AiFillEyeInvisible />}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}



export default InputField