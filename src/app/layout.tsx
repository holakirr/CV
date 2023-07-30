import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import me from 'public/me.jpg';
import './globals.sass';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', weight: ['800', '700', '400', '200'] });

export const metadata: Metadata = {
	title: "Kirill Petunin's CV",
	description: 'I am a frontend developer with 5+ years of experience',
	keywords:
		'frontend, developer, react, typescript, javascript, nextjs, reactjs, web, html, css, sass, tailwindcss, git, github, nodejs, npm, yarn, webpack, babel, jest, testing, testing-library, cypress, storybook, figma, design, ui, ux, user, experience, user experience, user interface, user interface design, user experience design, ui design, ux design, ui/ux, ui/ux design, ui/ux design',
	authors: [
		{
			name: 'Kirill Petunin',
			url: 'https://github.com/holakirr',
		},
	],
	openGraph: {
		title: "Kirill Petunin's CV",
		description: 'My CV with current information on 2023',
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: me.src,
				type: 'twitter:image',
			},
			{
				url: me.src,
				type: 'og:image',
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={jetBrainsMono.className}>{children}</body>
		</html>
	);
}
