import { type Cv, fetchCvFromApi, type Locale, type SkillCategory } from "./cv-api";
import { cvSnapshot } from "./cv-snapshot";

/**
 * CV content comes from the GraphQL business-card API rather than from
 * constants in this repository. Tolgee keeps the interface labels; the CV
 * itself lives in one place that both this site and the API expose.
 *
 * The API is an authoring tool, not a dependency of this site: builds read the
 * committed snapshot. Setting CV_API_URL switches to the live API, which is
 * what `npm run cv:snapshot` does when it refreshes the file.
 */

export type { Cv, Locale, SkillCategory };

const API_URL = process.env.CV_API_URL;

/**
 * Read at build time, so the deployed site is static and never calls out.
 *
 * Without CV_API_URL this returns the snapshot — no network, so a Vercel build
 * cannot fail because a self-hosted API was down. With it, the live API wins,
 * which is how the snapshot gets refreshed.
 */
export async function fetchCv(locale: Locale): Promise<Cv> {
	if (!API_URL) {
		return cvSnapshot[locale];
	}

	return fetchCvFromApi(locale, API_URL);
}

const CATEGORY_LABELS: Record<SkillCategory, string> = {
	FRONTEND: "Frontend",
	BACKEND: "Backend",
	DATABASE: "Database",
	DEVOPS: "Tools",
	TESTING: "Testing",
	SOFT: "Soft",
};

/** The tech-stack block groups skills by category, in the schema's own order. */
export function groupSkills(skills: Cv["skills"]): { type: string; description: string }[] {
	const byCategory = new Map<SkillCategory, string[]>();

	for (const skill of skills) {
		const bucket = byCategory.get(skill.category);

		if (bucket) {
			bucket.push(skill.name);
		} else {
			byCategory.set(skill.category, [skill.name]);
		}
	}

	return [...byCategory].map(([category, names]) => ({
		type: CATEGORY_LABELS[category],
		description: names.join(", "),
	}));
}
