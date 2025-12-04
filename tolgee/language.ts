'use server'

import { detectLanguageFromHeaders } from '@tolgee/react/server'
import { cookies, headers } from 'next/headers'
import { ALL_LANGUAGES, DEFAULT_LANGUAGE } from './shared'

const LANGUAGE_COOKIE = 'NEXT_LOCALE'

export async function setLanguage(locale: string) {
	const cookieStore = await cookies()
	cookieStore.set(LANGUAGE_COOKIE, locale, {
		maxAge: 1000 * 60 * 60 * 24 * 365, // one year in milisecods
	})
}

export async function getLanguage(locale?: string) {
	if (locale && ALL_LANGUAGES.includes(locale)) {
		return locale
	}

	const cookieStore = await cookies()
	const cookieLocale = cookieStore.get(LANGUAGE_COOKIE)?.value
	if (cookieLocale && ALL_LANGUAGES.includes(cookieLocale)) {
		return cookieLocale
	}

	const detected = detectLanguageFromHeaders(await headers(), ALL_LANGUAGES)
	return detected || DEFAULT_LANGUAGE
}
