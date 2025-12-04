import { DevTools, FormatSimple, Tolgee } from '@tolgee/web'

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL

export const ALL_LANGUAGES = ['ru', 'en']

export const DEFAULT_LANGUAGE = 'en'

export function TolgeeBase() {
	return Tolgee()
		.use(FormatSimple())
		.use(DevTools())
		.updateDefaults({
			apiKey,
			apiUrl,
			staticData: {
				en: () => import('../messages/en.json'),
				ru: () => import('../messages/ru.json'),
			},
		})
}
