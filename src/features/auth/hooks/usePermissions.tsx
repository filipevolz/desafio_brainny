import { useEffect } from "react"
import { useMeLazyQuery } from "../graphql/querys/query.generated"

const usePermissions = (userId: string): boolean => {
  console.log(userId)
  const [loadMe, { data, called }] = useMeLazyQuery()

  const userData = data?.me

  useEffect(() => {
    if (!userData && !called) {
      loadMe()
    }
  }, [called, userData])

  //TRUE = ADMIN
  //FALSE = USER
  return userData?.role?.type === 'admin' ? true : false
}

export default usePermissions