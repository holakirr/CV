"use client";

import { ToggleGroup, ToggleGroupItem } from "@holakirr/snow-ui";
import { redirect } from "next/navigation";
import { ALL_LANGUAGES } from "#/tolgee/shared";
import { FLAGS_MAP_LOCALE } from "./constants";

export const LocaleSwitcher = ({ locale }: { locale: string }) => {
	const changeHandler = (lang: string) => redirect(`/${lang}`);

	return (
		<ToggleGroup
			type="single"
			onValueChange={changeHandler}
			value={locale}
			className="fixed bottom-5 left-5 md:bottom-10 md:left-10 print:hidden z-10 bg-white rounded-xl p-0.5"
			tabIndex={0}
			aria-label="Switch Language"
		>
			{ALL_LANGUAGES.map((lang) => (
				<ToggleGroupItem
					key={lang}
					aria-label={`${lang} locale`}
					value={lang}
					className="cursor-pointer"
				>
					{FLAGS_MAP_LOCALE[lang as keyof typeof FLAGS_MAP_LOCALE]}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	);
};
