/**
 * CV content comes from the GraphQL business-card API rather than from
 * constants in this repository. Tolgee keeps the interface labels; the CV
 * itself lives in one place that both this site and the API expose.
 */

const API_URL = process.env.CV_API_URL ?? "http://localhost:3000/graphql";

export type Locale = "en" | "ru";

export type SkillCategory = "FRONTEND" | "BACKEND" | "DATABASE" | "DEVOPS" | "TESTING" | "SOFT";

export type Cv = {
	name: string;
	headline: string;
	description: string;
	location: string;
	availability: string;
	email: string;
	phone: string | null;
	website: string | null;
	yearsOfExperience: number;
	socialLinks: { platform: string; label: string; url: string }[];
	skills: { name: string; category: SkillCategory }[];
	experience: {
		company: string;
		position: string;
		period: string;
		isCurrent: boolean;
		startDate: string;
		endDate: string | null;
		summary: string | null;
		achievements: { description: string }[];
	}[];
	projects: {
		name: string;
		description: string;
		url: string;
		repositoryUrl: string | null;
		demoUrl: string | null;
		stack: string[];
		featured: boolean;
	}[];
	certifications: { name: string; issuer: string; url: string | null }[];
	languages: { name: string; level: string }[];
};

const CV_QUERY = /* GraphQL */ `
  query Cv($locale: Locale!) {
    profile(locale: $locale) {
      name
      headline
      description
      location
      availability
      email
      phone
      website
      yearsOfExperience
      socialLinks { platform label url }
      skills { name category }
      experience {
        company
        position
        period
        isCurrent
        startDate
        endDate
        summary
        achievements { description }
      }
      # The sidebar shows the highlighted ones; the flag exists for exactly this.
      projects(featured: true) { name description url repositoryUrl demoUrl stack featured }
      certifications { name issuer url }
      languages { name level }
    }
  }
`;

/**
 * Fetched at build time, so the deployed site stays static and the API is a
 * content source rather than a runtime dependency. `revalidate` lets a
 * redeploy-free refresh happen if the site is hosted somewhere that supports
 * ISR; on a fully static export it simply never fires.
 */
export async function fetchCv(locale: Locale): Promise<Cv> {
	const response = await fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query: CV_QUERY,
			variables: { locale: locale.toUpperCase() },
		}),
		next: { revalidate: 3600 },
	});

	if (!response.ok) {
		throw new Error(`CV API responded ${response.status} for locale ${locale} at ${API_URL}`);
	}

	const payload = (await response.json()) as {
		data?: { profile: Cv };
		errors?: { message: string }[];
	};

	if (payload.errors?.length) {
		throw new Error(`CV API errors: ${payload.errors.map((e) => e.message).join("; ")}`);
	}

	if (!payload.data) {
		throw new Error(`CV API returned no data for locale ${locale}`);
	}

	return payload.data.profile;
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
