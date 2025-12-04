'use client'

import { ToggleGroup, ToggleGroupItem } from '@holakirr/snow-ui'
import { redirect } from 'next/navigation'
import { ALL_LANGUAGES } from '#/tolgee/shared'

const FLAGS_MAP_LOCALE = {
	en: '🇬🇧',
	ru: '🇷🇺',
}

export const LocaleSwitcher = ({ locale }: { locale: string }) => {
	const changeHandler = (lang: string) => redirect(`/${lang}`)

	return (
		<ToggleGroup
			type="single"
			onValueChange={changeHandler}
			value={locale}
			className="fixed bottom-5 left-5 md:bottom-10 md:left-10 print:hidden z-10"
			tabIndex={0}
			aria-label="Switch Language"
		>
			{ALL_LANGUAGES.map(lang => (
				<ToggleGroupItem key={lang} aria-label={`${lang} locale`} value={lang}>
					{FLAGS_MAP_LOCALE[lang as keyof typeof FLAGS_MAP_LOCALE]}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	)
}
