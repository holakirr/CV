// Talking to the GraphQL business-card API. Deliberately free of any JSON
// import so the snapshot script can run this file directly under Node.

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

export async function fetchCvFromApi(locale: Locale, apiUrl: string): Promise<Cv> {
	const response = await fetch(apiUrl, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query: CV_QUERY,
			variables: { locale: locale.toUpperCase() },
		}),
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error(`CV API responded ${response.status} for locale ${locale} at ${apiUrl}`);
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
