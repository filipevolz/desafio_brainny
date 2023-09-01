import { useEffect, useState } from "react"
import { useMeLazyQuery } from "../graphql/querys/query.generated"
import { MeFieldsFragment } from "../graphql/fragments/fragments.generated"

export const useMe = () => {
  const [loadMe, { data, called, loading }] = useMeLazyQuery()

  const [me, setMe] = useState<MeFieldsFragment>()

  const meData = data?.me

  useEffect(() => {
    if (!meData && !called && !me) {
      loadMe()
    }
    if (meData) {
      setMe(meData)
    }
  }, [called, meData])

  //TRUE = ADMIN
  //FALSE = USER
  console.log('meData', meData)
  return {
    meData: me || meData,
    loading,
    loadMe,
    isAdmin: meData?.role?.type === 'admin',
    called
  }
}

