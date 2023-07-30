import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import me from 'public/me.jpg';
import './globals.sass';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', weight: ['800', '700', '400', '200'] });

export const metadata: Metadata = {
	title: "Kirill Petunin's CV",
	description: 'This is my CV with current information on 2023',
	authors: [
		{
			name: 'Kirill Petunin',
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
