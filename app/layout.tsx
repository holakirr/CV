import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { DESCRIPTION, TITLE } from "#/constants/meta";
import MeImage from "#/public/me.jpg";
import "./globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	keywords:
		"software engineer's CV, software engineer's resume, frontend developer's CV, frontend developer's resume, frontend development experience, 7+ years experience, 6+ years experience, 5+ years experience, 4+ years experience, 3+ years experience, frontend development projects, web developer role, frontend development skills, frontend developer role, web developer qualifications",
	authors: [
		{
			name: "Kirill Petunin",
			url: "https://github.com/holakirr",
		},
	],
	metadataBase: new URL("https://holakirr.com/"),
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		type: "website",
		locale: "en_US",
		images: [MeImage.src],
		url: "https://holakirr.com/",
	},
	twitter: {
		title: TITLE,
		description: DESCRIPTION,
		images: [MeImage.src],
	},
};

const inter = Inter({
	subsets: ["cyrillic", "latin"],
	weight: ["200", "500", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, "bg-orange-100")}>{children}</body>
		</html>
	);
}
