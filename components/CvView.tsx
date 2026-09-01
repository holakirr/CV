"use client";

import { useTranslate } from "@tolgee/react";

import { Bio, Certifications, Contacts, Header, Jobs, Pets, Skills } from "#/components";
import type { Cv } from "#/lib/cv";

/**
 * Section titles come from Tolgee, which resolves the language through the
 * provider set up in the layout. Reading them here rather than in the server
 * page keeps that guarantee: the server translator shares one instance whose
 * language the layout switches, and render order does not promise the page
 * observes the switch.
 */
export const CvView = ({ cv }: { cv: Cv }) => {
	const { t } = useTranslate();

	return (
		<main className="flex flex-col gap-10 bg-white mx-auto md:w-3xl lg:w-4xl md:my-6 lg:my-10 print:my-0 pb-20 p-4 md:p-6 xl:p-10 print:p-6 print:w-full shadow-paper print:shadow-none print:text-gray-500">
			<Header cv={cv} />

			<div className="w-full md:flex md:flex-row-reverse space-y-3 md:space-y-0 md:gap-3">
				<div className="flex flex-col gap-4">
					<Bio title={t("profile.title")} description={cv.description} />

					<Jobs title={t("jobs.title")} experience={cv.experience} />
				</div>

				<hr className="md:w-px md:h-auto md:bg-gray-200" />

				<aside className="md:w-60 md:min-w-60 space-y-3 md:space-y-4">
					<Skills title={t("stack.title")} skills={cv.skills} />

					<hr />

					<Certifications title={t("certificates.title")} certifications={cv.certifications} />

					<hr />

					<Pets title={t("pets.title")} projects={cv.projects} />

					<hr />

					<Contacts title={t("social.title")} socialLinks={cv.socialLinks} />
				</aside>
			</div>
		</main>
	);
};
