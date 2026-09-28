import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DESCRIPTION, KEYWORDS, OG_LOCALES, SITE_URL, TITLE } from "#/constants/meta";
import MeImage from "#/public/me.jpeg";
import { TolgeeNextProvider } from "#/tolgee/client";
import { getLanguage } from "#/tolgee/language";
import { getTolgee } from "#/tolgee/server";
import { ALL_LANGUAGES, DEFAULT_LANGUAGE } from "#/tolgee/shared";
import "../globals.css";

/**
 * Per-locale metadata. It used to be one static object naming the apex, so both
 * languages shipped the same canonical and the same `og:locale` — and every
 * absolute URL resolved through the apex's 307 to this host.
 */
export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const canonical = `${SITE_URL}/${locale}`;

	return {
		title: TITLE,
		description: DESCRIPTION,
		keywords: KEYWORDS,

		authors: [
			{
				name: "Kirill Petunin",
				url: "https://github.com/holakirr",
			},
		],

		creator: "Kirill Petunin",
		publisher: "Kirill Petunin",

		metadataBase: new URL(SITE_URL),

		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},

		openGraph: {
			type: "website",
			locale: OG_LOCALES[locale] ?? OG_LOCALES[DEFAULT_LANGUAGE],
			alternateLocale: ALL_LANGUAGES.filter((lang) => lang !== locale).map(
				(lang) => OG_LOCALES[lang]
			),
			url: canonical,
			siteName: "Kirill Petunin Portfolio",
			title: TITLE,
			description: DESCRIPTION,
			images: [
				{
					url: MeImage.src,
					width: 630,
					height: 630,
					alt: "Kirill Petunin - Senior Frontend Developer",
				},
			],
		},

		twitter: {
			card: "summary_large_image",
			title: TITLE,
			description: DESCRIPTION,
			creator: "@holakirr",
			images: [MeImage.src],
		},

		alternates: {
			canonical,
			languages: {
				...Object.fromEntries(
					ALL_LANGUAGES.map((lang) => [OG_LOCALES[lang].replace("_", "-"), `${SITE_URL}/${lang}`])
				),
				"x-default": `${SITE_URL}/${DEFAULT_LANGUAGE}`,
			},
		},

		category: "technology",
	};
}

const inter = Inter({
	subsets: ["cyrillic", "latin"],
	weight: ["200", "500", "700", "800"],
});

export function generateStaticParams() {
	return [{ locale: "en" }, { locale: "ru" }];
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const language = await getLanguage(locale);
	const tolgee = await getTolgee();

	await tolgee.changeLanguage(language);

	const staticData = await tolgee.loadRequired();

	return (
		<html lang={language}>
			<body className={clsx(inter.className, "bg-stone-200 print:bg-white")}>
				<TolgeeNextProvider language={language} staticData={staticData}>
					{children}
				</TolgeeNextProvider>
			</body>
		</html>
	);
}
