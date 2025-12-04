import { ALL_LANGUAGES, DEFAULT_LANGUAGE } from './shared'

export async function getLanguage(locale?: string): Promise<string> {
	if (locale && ALL_LANGUAGES.includes(locale)) {
		return locale
	}
	return DEFAULT_LANGUAGE
}
