"use client";

import { useTranslate } from "@tolgee/react";

import type { Cv, Locale } from "#/lib/cv";
import { formatPhone, pluralCategory, splitName } from "#/lib/cv-view";
import { DownloadCVBtn, LocaleSwitcher, Photo } from "#/ui";

/**
 * The orange plane: everything a recruiter needs in the first twenty seconds.
 * On paper the plane goes white and only the 8px bar above it stays orange.
 */
export const Header = ({ cv, locale }: { cv: Cv; locale: Locale }) => {
	const { t } = useTranslate();
	const [firstName, lastName] = splitName(cv.name);
	const years = t(`profile.years.${pluralCategory(cv.yearsOfExperience, locale)}`, {
		n: cv.yearsOfExperience,
	});
	const websiteLabel = cv.website?.replace(/^https?:\/\//, "").replace(/\/$/, "");

	const contactLink =
		"font-bold text-orange-950 hover:text-orange-950 -my-[7px] py-2.5 text-[15px] lg:my-0 lg:py-0 lg:text-base print:my-0 print:py-0 print:text-[12px] print:text-gray-900";

	return (
		<header className="bg-orange-500 px-5 pt-4 pb-7 text-orange-950 lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14 lg:px-[72px] lg:pt-10 lg:pb-12 print:grid print:grid-cols-[minmax(0,1fr)_84px] print:items-start print:gap-6 print:bg-transparent print:px-12 print:pt-6 print:pb-0 print:text-gray-900">
			<div className="flex min-w-0 flex-col lg:h-full">
				<div className="flex items-center justify-between gap-2 print:hidden">
					<span className="hidden text-sm font-bold lg:block">{years}</span>

					<div className="flex w-full items-center justify-between gap-2 lg:w-auto lg:justify-end">
						<LocaleSwitcher locale={locale} />

						<DownloadCVBtn locale={locale} />
					</div>
				</div>

				<div className="mt-6 grid grid-cols-[minmax(0,1fr)_96px] items-end gap-4 lg:mt-9 lg:block print:mt-0 print:block">
					<h1 className="text-[44px] font-extrabold leading-[0.98] tracking-[-0.035em] lg:text-[80px] lg:leading-none print:text-[40px] print:leading-none print:tracking-[-0.03em]">
						<span className="block lg:inline print:inline">{firstName}</span>{" "}
						<span className="block lg:inline print:inline">{lastName}</span>
					</h1>

					<Photo className="h-[120px] w-24 rounded-[10px] border-2 border-orange-950 lg:hidden print:hidden" />
				</div>

				<p className="mt-3.5 text-lg font-bold leading-[1.35] lg:text-2xl print:mt-2 print:text-base">
					{cv.headline}
				</p>

				<p className="mt-2.5 text-[13px] font-bold lg:hidden print:hidden">{years}</p>

				<div className="mt-3.5 flex flex-wrap gap-1.5 lg:mt-6 lg:gap-2 print:hidden">
					<span className="rounded-md bg-orange-950 px-2.5 py-1 text-[12px] font-bold text-orange-100 lg:text-[13px]">
						{cv.availability}
					</span>
					<span className="rounded-md border-[1.5px] border-orange-950 px-2.5 py-[3px] text-[12px] font-bold lg:text-[13px]">
						{cv.location}
					</span>
				</div>

				<div className="hidden flex-wrap gap-x-3.5 gap-y-1.5 text-[12px] font-medium text-gray-700 print:mt-2.5 print:flex">
					<span className="font-extrabold text-gray-900">{years}</span>
					<span>{cv.availability}</span>
					<span>{cv.location}</span>
				</div>

				<div className="mt-3.5 flex flex-col gap-0.5 lg:mt-auto lg:flex-row lg:flex-wrap lg:gap-7 lg:pt-6 print:mt-1.5 print:flex-row print:flex-wrap print:gap-x-[18px] print:gap-y-1.5 print:pt-0">
					{cv.phone && (
						<a href={`tel:${cv.phone.replace(/[^\d+]/g, "")}`} className={contactLink}>
							{formatPhone(cv.phone)}
						</a>
					)}

					<a href={`mailto:${cv.email}`} className={contactLink}>
						{cv.email}
					</a>

					{cv.website && (
						<a href={cv.website} target="_blank" rel="noreferrer" className={contactLink}>
							{websiteLabel}
						</a>
					)}
				</div>
			</div>

			<Photo className="hidden lg:block lg:h-[300px] lg:w-60 lg:self-end lg:rounded-xl lg:border-[3px] lg:border-orange-950 print:block print:h-[104px] print:w-[84px] print:self-start print:rounded-md print:border-[1.5px] print:border-gray-900" />
		</header>
	);
};
