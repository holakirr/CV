import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import me from '../public/me.jpg'
import './globals.css'

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	display: 'swap',
	weight: ['800', '700', '400', '200'],
})
const title = "Kirill Petunin's CV"
const description = 'I am a frontend developer with 5+ years of experience'

export const metadata: Metadata = {
	title,
	description,
	keywords:
		"software engineer's CV, software engineer's resume, frontend developer's CV, frontend developer's resume, frontend development experience, frontend development 5+ years experience, frontend development 3+ years experience, frontend development 4+ years experience, frontend development projects, web developer role, frontend development skills, frontend developer role, web developer qualifications",
	authors: [
		{
			name: 'Kirill Petunin',
			url: 'https://github.com/holakirr',
		},
	],
	openGraph: {
		title,
		description,
		type: 'website',
		locale: 'en_US',
		images: [me.src],
		url: 'https://holakirr.com/',
	},
	twitter: {
		title,
		description,
		images: [me.src],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={jetBrainsMono.className}>{children}</body>
		</html>
	)
}
