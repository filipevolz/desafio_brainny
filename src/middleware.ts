import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookies = request.cookies.get('pontogo:authToken')

  if (!cookies) {
    console.log('not authenticated')
    return NextResponse.redirect(new URL('/login', process.env.NEXT_PUBLIC_WEB_URL));
  } else {
    console.log('authenticated')
  }
}

export const config = {
  matcher: '/private/:path*',
}