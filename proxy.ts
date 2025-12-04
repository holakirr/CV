import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { ALL_LANGUAGES, DEFAULT_LANGUAGE } from './tolgee/shared'

const LANGUAGE_COOKIE = 'NEXT_LOCALE'

export function proxy(request: NextRequest) {
	const pathname = request.nextUrl.pathname

	// Extract locale from pathname
	const pathnameLocale = ALL_LANGUAGES.find(
		locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)

	// If no locale in pathname, redirect to default locale
	if (!pathnameLocale) {
		const locale = DEFAULT_LANGUAGE
		const response = NextResponse.redirect(
			new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
		)
		// Set cookie for default locale
		response.cookies.set(LANGUAGE_COOKIE, locale, {
			maxAge: 1000 * 60 * 60 * 24 * 365, // one year
		})
		return response
	}

	// Locale found in pathname, set cookie and continue
	const response = NextResponse.next()
	const currentCookie = request.cookies.get(LANGUAGE_COOKIE)?.value

	// Only update cookie if it's different
	if (currentCookie !== pathnameLocale) {
		response.cookies.set(LANGUAGE_COOKIE, pathnameLocale, {
			maxAge: 1000 * 60 * 60 * 24 * 365, // one year
		})
	}

	return response
}

export const config = {
	matcher: [
		// Match all pathnames except for:
		// - api routes
		// - _next (Next.js internals)
		// - static files (files with extensions)
		// - favicon.ico
		'/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf)).*)',
	],
}
