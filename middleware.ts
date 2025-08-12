import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    // Check if user has student authentication
    const studentAuth = request.cookies.get('student-auth')

    if (!studentAuth || !studentAuth.value) {
      console.log('No student auth cookie found, redirecting to login')
      return NextResponse.redirect(new URL('/student-login', request.url))
    }

    try {
      // Validate the cookie contains valid student data
      const studentData = JSON.parse(decodeURIComponent(studentAuth.value))
      if (!studentData.id || !studentData.email) {
        console.log('Invalid student data in cookie, redirecting to login')
        return NextResponse.redirect(new URL('/student-login', request.url))
      }
    } catch (error) {
      console.log('Error parsing student auth cookie, redirecting to login')
      return NextResponse.redirect(new URL('/student-login', request.url))
    }
  }

  // Allow all other routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}
