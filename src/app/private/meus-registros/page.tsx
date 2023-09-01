"use client"

import {
  Flex,
} from "@chakra-ui/react"
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { TableRegisterTimeTemplate } from "src/atomic/template/TableRegisterTimeTemplate";
import { useMe } from "src/features/auth/hooks/useMe";

export default function Page() {
  const { isAdmin, loading, meData } = useMe();

  useEffect(() => {
    if (isAdmin && !loading && meData) {
      window.location.href = '/private/dashboard'
    }
  }, [isAdmin, loading, meData])

  if (isAdmin) return <></>

  return (
    <TableRegisterTimeTemplate isAdmin={isAdmin} />
  )
}
