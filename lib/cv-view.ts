import type { Cv, Locale } from "./cv-api";

/**
 * Presentation helpers for the CV. Everything here is derived from API data on
 * the client — no new fields are needed from the API for the 1a design.
 */

export type Experience = Cv["experience"][number];
export type Project = Cv["projects"][number];

/** Jobs that ended within this many years still count as "recent". */
const RECENT_YEARS = 3;

/**
 * The design shows recent work as prominent cards and everything older as a
 * compact list. "Recent" is the current job or one that ended within the last
 * three years; the API's own order is kept within each group.
 */
export function splitExperience(
	experience: Cv["experience"],
	now: Date = new Date()
): { recent: Experience[]; earlier: Experience[] } {
	const cutoff = new Date(now);
	cutoff.setFullYear(cutoff.getFullYear() - RECENT_YEARS);

	const recent: Experience[] = [];
	const earlier: Experience[] = [];

	for (const entry of experience) {
		const endsRecently = entry.endDate !== null && new Date(entry.endDate) >= cutoff;

		if (entry.isCurrent || endsRecently) {
			recent.push(entry);
		} else {
			earlier.push(entry);
		}
	}

	return { recent, earlier };
}

/** "May 2026" / "май 2026" — the Russian "г." suffix is dropped to match the design. */
export function formatMonth(iso: string, locale: Locale): string {
	return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" })
		.format(new Date(iso))
		.replace(/\s?г\.$/, "");
}

/** Whole months between the first days of two months; a job open today ends now. */
export function monthsBetween(
	startIso: string,
	endIso: string | null,
	now: Date = new Date()
): number {
	const start = new Date(startIso);
	const end = endIso ? new Date(endIso) : now;

	return Math.max(
		0,
		(end.getUTCFullYear() - start.getUTCFullYear()) * 12 + (end.getUTCMonth() - start.getUTCMonth())
	);
}

export type PluralCategory = "one" | "few" | "many" | "other";

/**
 * Tolgee here runs FormatSimple, which has no ICU plurals, so the plural
 * category is chosen in code and each form lives under its own key.
 */
export function pluralCategory(n: number, locale: Locale): PluralCategory {
	const category = new Intl.PluralRules(locale).select(n);

	return category === "one" || category === "few" || category === "many" ? category : "other";
}

export type LinkLabel = "Npm" | "Github" | "Storybook" | "Telegram" | "Site";

/** The label is decided by the domain, for any of a project's three URLs. */
export function labelOf(url: string): LinkLabel {
	let host = "";

	try {
		host = new URL(url).hostname;
	} catch {
		return "Site";
	}

	if (host.endsWith("npmjs.com")) return "Npm";
	if (host.endsWith("github.com")) return "Github";
	if (host === "t.me" || host.endsWith("telegram.me")) return "Telegram";
	if (host.startsWith("snow-ui") && host.endsWith("holakirr.com")) return "Storybook";
	if (host.includes("storybook")) return "Storybook";

	return "Site";
}

/** "https://www.npmjs.com/package/x/" → "npmjs.com/package/x", for print where a bare label is useless. */
export function displayUrl(url: string): string {
	return url
		.replace(/^https?:\/\//, "")
		.replace(/^www\./, "")
		.replace(/\/$/, "");
}

export type ProjectLink = { label: LinkLabel; url: string; domain: string };

export function projectLinks(project: Project): ProjectLink[] {
	return [project.url, project.repositoryUrl, project.demoUrl]
		.filter((url): url is string => Boolean(url))
		.map((url) => ({ label: labelOf(url), url, domain: displayUrl(url) }));
}

/** The API stores one full name; the mobile header sets the two halves on separate lines. */
export function splitName(name: string): [string, string] {
	const [first = name, ...rest] = name.split(" ");

	return [first, rest.join(" ")];
}

/** "+79956727623" → "+7 995 672-76-23"; other numbers are shown as stored. */
export function formatPhone(phone: string): string {
	const digits = phone.replace(/\D/g, "");
	const match = /^7(\d{3})(\d{3})(\d{2})(\d{2})$/.exec(digits);

	return match ? `+7 ${match[1]} ${match[2]}-${match[3]}-${match[4]}` : phone;
}
