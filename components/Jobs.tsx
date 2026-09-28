"use client";

import { useTranslate } from "@tolgee/react";
import clsx from "clsx";

import type { Cv, Locale } from "#/lib/cv";
import {
	type Experience,
	formatMonth,
	monthsBetween,
	pluralCategory,
	splitExperience,
} from "#/lib/cv-view";
import { Section } from "#/ui";

const useDuration = (locale: Locale) => {
	const { t } = useTranslate();

	return (entry: Experience): string => {
		const months = monthsBetween(entry.startDate, entry.endDate);
		const years = Math.floor(months / 12);
		const rest = months % 12;
		const parts: string[] = [];

		if (years > 0) {
			parts.push(t(`common.duration.years.${pluralCategory(years, locale)}`, { n: years }));
		}

		if (rest > 0 || parts.length === 0) {
			parts.push(t("common.duration.months.other", { n: rest }));
		}

		return parts.join(" ");
	};
};

const CurrentPill = ({ label }: { label: string }) => (
	<span className="rounded-full bg-orange-950 px-[7px] py-[3px] text-[10px] font-extrabold uppercase tracking-[0.06em] text-orange-100 lg:px-2 lg:text-[11px] print:border-[1.5px] print:border-gray-900 print:bg-transparent print:px-1.5 print:py-px print:text-[9px] print:tracking-[0.08em] print:text-gray-900">
		{label}
	</span>
);

/** A recent job: the orange-tinted card with a date column on desktop and paper. */
const ProminentEntry = ({ entry, locale }: { entry: Experience; locale: Locale }) => {
	const { t } = useTranslate();
	const duration = useDuration(locale)(entry);
	const start = formatMonth(entry.startDate, locale);
	const end =
		entry.isCurrent || !entry.endDate ? t("jobs.current") : formatMonth(entry.endDate, locale);

	return (
		<article className="break-inside-avoid rounded-xl border border-orange-200 bg-orange-50 p-4 pt-[18px] lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:py-7 print:grid print:grid-cols-[118px_minmax(0,1fr)] print:gap-4 print:rounded-lg print:border-[1.5px] print:border-gray-900 print:bg-white print:px-3.5 print:py-2.5">
			{/* Phone: pill and the whole period on one row. */}
			<div className="flex flex-wrap items-center gap-2 lg:hidden print:hidden">
				{entry.isCurrent && <CurrentPill label={t("jobs.current")} />}
				<span className="text-sm font-extrabold text-orange-800">
					{start} — {end}
				</span>
			</div>

			{/* Desktop and paper: a date column. */}
			<div className="hidden flex-col items-start gap-1 lg:flex print:flex print:gap-0.5">
				{entry.isCurrent && (
					<span className="mb-1.5 print:mb-1">
						<CurrentPill label={t("jobs.current")} />
					</span>
				)}
				<span className="text-base font-extrabold text-orange-800 print:text-[12px] print:text-gray-900">
					{start} —
				</span>
				<span className="text-base font-extrabold text-orange-800 print:text-[12px] print:text-gray-900">
					{end}
				</span>
				<span className="mt-1 text-[13px] font-medium text-gray-500 print:mt-0.5 print:text-[11px] print:text-gray-600">
					{duration}
				</span>
			</div>

			<div className="min-w-0">
				<div className="print:flex print:flex-wrap print:items-baseline print:gap-2">
					<h3 className="mt-2 text-[21px] font-extrabold tracking-[-0.015em] lg:mt-0 lg:text-[26px] print:mt-0 print:text-base">
						{entry.company}
					</h3>
					<p className="mt-0.5 text-sm font-bold text-gray-700 lg:text-base print:mt-0 print:text-[12px]">
						{entry.position}
						<span className="font-medium text-gray-500 lg:hidden print:hidden"> · {duration}</span>
					</p>
				</div>

				{entry.summary && (
					<p className="mt-2 text-sm leading-[1.5] text-gray-700 text-pretty lg:mt-2.5 lg:max-w-[820px] lg:text-[15px] lg:leading-[1.55] print:mt-0.5 print:text-[12px] print:leading-[1.4]">
						{entry.summary}
					</p>
				)}

				{entry.achievements.length > 0 && (
					<ul className="mt-3 flex flex-col gap-1.5 border-t border-orange-200 pt-3 lg:mt-3.5 lg:pt-3.5 print:mt-1 print:gap-0.5 print:border-0 print:pt-0">
						{entry.achievements.map((achievement) => (
							<li
								key={achievement.description}
								className="flex gap-2.5 text-[13px] leading-[1.5] text-gray-600 lg:gap-3 lg:text-sm lg:leading-[1.55] print:gap-2 print:text-[12px] print:leading-[1.4] print:text-gray-900"
							>
								<span
									aria-hidden
									className="mt-[7px] size-[5px] shrink-0 bg-orange-500 lg:mt-2 lg:size-1.5 print:mt-1.5 print:size-1 print:bg-gray-900"
								/>
								<span className="text-pretty">{achievement.description}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</article>
	);
};

/** An older job: one compact row, no card. */
const CompactEntry = ({ entry, locale }: { entry: Experience; locale: Locale }) => {
	const { t } = useTranslate();
	const start = formatMonth(entry.startDate, locale);
	const end =
		entry.isCurrent || !entry.endDate ? t("jobs.current") : formatMonth(entry.endDate, locale);

	return (
		<div className="break-inside-avoid border-b border-gray-100 py-3.5 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8 lg:px-8 print:grid print:grid-cols-[118px_minmax(0,1fr)] print:gap-4 print:border-gray-200 print:py-1.5">
			<span className="text-[12px] font-bold text-gray-500 lg:text-sm print:text-[12px] print:text-gray-900">
				{start} — {end}
			</span>

			<div className="min-w-0">
				<div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
					<h3 className="text-[15px] font-extrabold lg:text-[17px] print:text-[13px]">
						{entry.company}
					</h3>
					<span className="text-[13px] font-medium text-gray-500 lg:text-sm print:text-[12px] print:text-gray-600">
						{entry.position}
					</span>
				</div>

				{entry.summary && (
					<p className="mt-1 text-[13px] leading-[1.5] text-gray-600 lg:text-sm print:mt-0.5 print:text-[12px] print:leading-[1.45] print:text-gray-700">
						{entry.summary}
					</p>
				)}
			</div>
		</div>
	);
};

export const Jobs = ({
	title,
	experience,
	locale,
}: {
	title: string;
	experience: Cv["experience"];
	locale: Locale;
}) => {
	const { t } = useTranslate();
	const { recent, earlier } = splitExperience(experience);

	return (
		<Section title={title}>
			<div className="flex flex-col gap-2.5 lg:gap-3 print:gap-2">
				{recent.map((entry) => (
					<ProminentEntry
						key={`${entry.company}-${entry.startDate}`}
						entry={entry}
						locale={locale}
					/>
				))}
			</div>

			{earlier.length > 0 && (
				<>
					<h3
						className={clsx(
							"mt-7 mb-1 text-[12px] font-extrabold uppercase tracking-[0.08em] text-gray-400",
							"lg:ml-8 lg:text-[13px] print:mt-3 print:text-[11px] print:tracking-[0.1em] print:text-gray-900"
						)}
					>
						{t("jobs.earlier")}
					</h3>

					<div>
						{earlier.map((entry) => (
							<CompactEntry
								key={`${entry.company}-${entry.startDate}`}
								entry={entry}
								locale={locale}
							/>
						))}
					</div>
				</>
			)}
		</Section>
	);
};
