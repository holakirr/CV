"use client";

import { useTranslate } from "@tolgee/react";

import type { Cv } from "#/lib/cv";

const label =
	"mb-3 text-[13px] font-extrabold uppercase tracking-[0.08em] text-gray-500 print:mb-2 print:text-[11px] print:tracking-[0.1em] print:text-gray-900";

/** "Русский — родной", "English — C1": the CEFR code is shown as is, NATIVE is translated. */
export const Languages = ({ title, languages }: { title: string; languages: Cv["languages"] }) => {
	const { t } = useTranslate();

	return (
		<div>
			<h2 className={label}>{title}</h2>

			<ul className="flex flex-col gap-2 text-sm font-medium text-gray-700 print:gap-0.5 print:text-[12px]">
				{languages.map((language) => (
					<li key={language.name}>
						{language.name} —{" "}
						{language.level === "NATIVE" ? t("languages.level.NATIVE") : language.level}
					</li>
				))}
			</ul>
		</div>
	);
};
