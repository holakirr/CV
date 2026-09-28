"use client";

import { useTranslate } from "@tolgee/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

import { ALL_LANGUAGES } from "#/tolgee/shared";

/**
 * Sits inside the orange header, so it draws its own two-tone style instead of
 * the library toggle: dark on the active language, outlined on the other.
 */
export const LocaleSwitcher = ({ locale }: { locale: string }) => {
	const router = useRouter();
	const { t } = useTranslate();

	return (
		<fieldset className="flex overflow-hidden rounded-lg border-2 border-orange-950 text-[13px] font-bold">
			<legend className="sr-only">{t("common.actions.switchLanguage")}</legend>
			{ALL_LANGUAGES.map((lang) => {
				const active = lang === locale;

				return (
					<button
						key={lang}
						type="button"
						aria-pressed={active}
						onClick={() => {
							if (!active) router.push(`/${lang}`);
						}}
						className={clsx(
							"cursor-pointer px-3 py-1.5 uppercase lg:py-[5px]",
							active ? "bg-orange-950 text-orange-100" : "text-orange-950"
						)}
					>
						{lang}
					</button>
				);
			})}
		</fieldset>
	);
};
