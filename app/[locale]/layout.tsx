import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DESCRIPTION, KEYWORDS, TITLE } from '#/constants/meta'
import MeImage from '#/public/me.jpeg'
import { TolgeeNextProvider } from '#/tolgee/client'
import { getLanguage } from '#/tolgee/language'
import { getTolgee } from '#/tolgee/server'
import { DownloadCVBtn } from '#/ui/DownloadCVButton'
import { LocaleSwitcher } from '#/ui/LocaleSwitcher'
import '../globals.css'

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	keywords: KEYWORDS,

	authors: [
		{
			name: 'Kirill Petunin',
			url: 'https://github.com/holakirr',
		},
	],

	creator: 'Kirill Petunin',
	publisher: 'Kirill Petunin',

	metadataBase: new URL('https://holakirr.com'),

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	openGraph: {
		type: 'website',
		locale: 'en_US',
		alternateLocale: ['ru_RU'],
		url: 'https://holakirr.com',
		siteName: 'Kirill Petunin Portfolio',
		title: TITLE,
		description: DESCRIPTION,
		images: [
			{
				url: MeImage.src,
				width: 630,
				height: 630,
				alt: 'Kirill Petunin - Senior Frontend Developer',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: TITLE,
		description: DESCRIPTION,
		creator: '@holakirr',
		images: [MeImage.src],
	},

	alternates: {
		canonical: 'https://holakirr.com',
		languages: {
			'en-US': 'https://holakirr.com',
			'ru-RU': 'https://holakirr.com/ru', // если добавите русскую версию
		},
	},

	category: 'technology',
}

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	weight: ['200', '500', '700', '800'],
})

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'ru' }]
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const language = await getLanguage(locale)
	const tolgee = await getTolgee()
	const staticData = await tolgee.loadRequired()

	return (
		<html lang={language}>
			<body className={clsx(inter.className, 'bg-orange-100')}>
				<TolgeeNextProvider language={language} staticData={staticData}>
					<LocaleSwitcher locale={locale} />

					<DownloadCVBtn locale={locale} />

					{children}
				</TolgeeNextProvider>
			</body>
		</html>
	)
}
