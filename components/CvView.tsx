"use client";

import { useTranslate } from "@tolgee/react";

import { Bio, Certifications, Contacts, Header, Jobs, Languages, Pets, Skills } from "#/components";
import type { Cv, Locale } from "#/lib/cv";

/**
 * Section titles come from Tolgee, which resolves the language through the
 * provider set up in the layout. Reading them here rather than in the server
 * page keeps that guarantee: the server translator shares one instance whose
 * language the layout switches, and render order does not promise the page
 * observes the switch.
 */
export const CvView = ({ cv, locale }: { cv: Cv; locale: Locale }) => {
	const { t } = useTranslate();

	return (
		<main className="mx-auto w-full max-w-[1440px] bg-white pb-12 lg:my-8 lg:shadow-[0_4px_32px_rgba(0,0,0,0.12)] print:my-0 print:max-w-none print:pb-0 print:shadow-none">
			<div aria-hidden className="hidden h-2 bg-orange-500 print:block" />

			<Header cv={cv} locale={locale} />

			<Bio title={t("profile.title")} description={cv.description} />

			<Jobs title={t("jobs.title")} experience={cv.experience} locale={locale} />

			<Skills title={t("stack.title")} skills={cv.skills} />

			<Pets title={t("pets.title")} projects={cv.projects} />

			<footer className="mt-9 flex flex-col gap-8 px-5 lg:mt-10 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:border-t-2 lg:border-gray-900 lg:px-[72px] lg:pt-7 lg:pb-14 print:mt-5 print:grid print:grid-cols-2 print:gap-x-7 print:gap-y-4 print:border-0 print:px-12 print:pt-0 print:pb-0">
				<Certifications title={t("certificates.title")} certifications={cv.certifications} />

				<Contacts title={t("social.title")} socialLinks={cv.socialLinks} />

				<Languages title={t("languages.title")} languages={cv.languages} />
			</footer>

			{/* Chrome repeats a fixed element on every printed page: the running footer. */}
			<div className="hidden print:fixed print:inset-x-0 print:bottom-0 print:flex print:justify-between print:px-12 print:pb-3.5 print:text-[10px] print:text-gray-500">
				<span>
					{cv.name} · {cv.headline}
				</span>
				<span>{cv.email}</span>
			</div>
		</main>
	);
};
