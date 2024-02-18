import { NextResponse } from "next/server";

export const config = {
  matcher: [ '/', '/index' ],
}

export function middleware( req ) {
  const basicAuth = req.headers.get( 'authorization' )
  const url = req.nextUrl

  if ( basicAuth ) {
    const authValue = basicAuth.split( ' ' )[ 1 ]
    const [ user, pwd ] = atob( authValue ).split( ':' )

    if ( user === process.env.BASIC_AUTH_USR && pwd
        === process.env.BASIC_AUTH_PWD ) {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/basic/auth'

  return NextResponse.rewrite( url )
}
