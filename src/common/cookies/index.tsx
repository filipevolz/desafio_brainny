import { NextPageContext } from 'next'
import {
  destroyCookie as destroyNookie,
  parseCookies,
  setCookie as setNookie,
} from 'nookies'

export const getCookie = (ctx: any, key: string) => {
  const cookies = parseCookies(ctx)
  return cookies?.[`${process.env.NEXT_PUBLIC_COOKIE_PREFIX}:${key}`]
}

export const setCookie = (
  ctx: Pick<NextPageContext, 'res'> | { res: any } | null,
  key: string,
  value: string,
  cookieOptions: { maxAge: number; path: string },
) => {
  return setNookie(
    ctx,
    `${process.env.NEXT_PUBLIC_COOKIE_PREFIX}:${key}`,
    value,
    cookieOptions,
  )
}

export function destroyCookie(ctx: any, key: string) {
  return destroyNookie(ctx, `${process.env.NEXT_PUBLIC_COOKIE_PREFIX}:${key}`, {
    path: '/',
  })
}
