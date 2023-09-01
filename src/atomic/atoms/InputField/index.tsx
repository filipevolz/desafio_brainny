import { Input } from "@chakra-ui/react"
import { useController } from "react-hook-form"

interface InputFieldProps {
  name: string;

}

const InputField = ({ name }: InputFieldProps) => {

  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { errors }
  } = useController({
    name,
  });

  return (
    <Input color={'black'} bg={'white'} {...field} />
  )
}



export default InputField