import { useCallback } from "react"
import { useCreateRegisteredTimeMutation } from "../graphql/mutations/mutation.generated"
import { InputMaybe, RegisteredTimeInput } from "src/generated/graphql"

export const useCreateRegisterTime = () => {

  const [createNewRegister, { loading, data }] = useCreateRegisteredTimeMutation({
    refetchQueries: ['registeredTimes'],
  })

  const handleCreateNewRegisterTime = useCallback(async (input: InputMaybe<RegisteredTimeInput>) => {
    try {
      await createNewRegister({
        variables: {
          input: {
            data: input,
          }
        },
      })
    } catch (error) {
      console.log('Error', error)
    }
  }, [])

  return {
    handleCreateNewRegisterTime,
    createNewRegisterLoading: loading,
    data
  }
}