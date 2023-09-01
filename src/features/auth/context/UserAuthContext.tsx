"use client"
import { createContext, useCallback, useContext, useState } from "react"
import { MeFieldsFragment } from "../graphql/fragments/fragments.generated"
import { LoginMutationVariables, useLoginMutation } from "../graphql/mutations/mutation.generated"
import { destroyCookie, getCookie, setCookie } from "src/common/cookies"
import { useRouter } from 'next/navigation';


export type UserAuthContextProps = {
  userLogged?: Partial<MeFieldsFragment>
  authenticate: (variables: LoginMutationVariables) => Promise<any>
  logout: () => void
  isLoading: boolean
  isAdmin: boolean
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const UserAuthContext = createContext<UserAuthContextProps>({
  userLogged: undefined,
  authenticate: async (variables) => variables,
  logout: () => 'OK',
  isLoading: false,
  isAdmin: false,
})

export function AuthProvider({ children }: AuthProviderProps) {
  const [login, { loading }] = useLoginMutation();
  const { push } = useRouter();

  const [userLogged, setUserLogged] = useState<MeFieldsFragment>()

  const authenticate = useCallback(
    async ({ input: { identifier, password } }: LoginMutationVariables) => {
      try {
        const { data } = await login({
          variables: {
            input: {
              identifier,
              password,
            }
          }
        })
        if (data?.login?.user?.blocked) {
          throw new Error("Seu usuario está bloqueado")
        } else {
          setUserLogged(data?.login?.user)
          if (data?.login?.jwt) {
            setCookie(null, 'authToken', data.login.jwt, {
              maxAge: 31536000,
              path: '/',
            })
            if (data?.login?.user?.role?.name === "admin") {
              push('/private/dashboard')
            } else {
              push('/private/meus-registros')
            }
          }
        }

      } catch (err) {
        console.log('Error in Login!')
      }
    }, [])

  const isAdmin = userLogged?.role?.name === "admin"

  const logout = useCallback(async () => {
    destroyCookie(null, 'authToken')
  }, [])

  return (
    <UserAuthContext.Provider
      value={{
        userLogged,
        authenticate,
        logout,
        isLoading: loading,
        isAdmin,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  )
};

export function useUserAuthContext() {
  return useContext(UserAuthContext)
}