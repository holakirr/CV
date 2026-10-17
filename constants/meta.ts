export const TITLE = "Kirill Petunin | Senior Frontend Engineer · React / TypeScript";
export const DESCRIPTION =
	"React and TypeScript interfaces for fintech and e-commerce. Reduced initial application load time from 10 seconds to 2. Commercial UI libraries, payment interfaces and independently shipped products. Remote from Kazan, Russia.";
export const KEYWORDS = [
	// Job Titles
	"Senior Frontend Developer",
	"Frontend Developer",
	"Full Stack Developer",
	"Team Lead",
	"React Developer",
	"TypeScript Developer",
	"JavaScript Developer",
	"Node.js Developer",

	// Personal
	"Kirill Petunin",
	"holakirr",

	// Core Technologies
	"React",
	"React.js",
	"TypeScript",
	"JavaScript",
	"Node.js",
	"Nest.js",
	"Next.js",
	"GraphQL",
	"REST API",

	// Additional Technologies
	"Redux",
	"TailwindCSS",
	"Docker",
	"Git",
	"Microservices",
	"PostgreSQL",
	"MongoDB",

	// Skills & Practices
	"Performance Optimization",
	"Code Review",
	"Agile",
	"Scrum",
	"CI/CD",
	"Testing",
	"TDD",

	// Projects
	"SnowUI",
	"Component Library",
	"UI Library",
	"Open Source",
	"npm Package",

	// Work Format
	"Remote Developer",
	"Remote Work",
	"Worldwide Remote",
	"Available for Hire",

	// Location & Experience
	"Kazan Russia",
	"International Developer",
	"8 years web development",
	"English Fluent",

	// Companies
	"Grid Dynamics",
	"T1 Innotech",

	// Industry
	"Fintech",
	"E-commerce",
	"Enterprise Software",

	// Portfolio
	"Portfolio",
	"CV",
	"Resume",
	"GitHub",
];

/**
 * Canonical origin of the site. The apex redirects here, so metadata must name
 * this host directly: pointing at the apex made every canonical and OG URL
 * resolve through a 307.
 */
export const SITE_URL = "https://cv.holakirr.com";

/** Maps a route locale to the BCP 47 tag OpenGraph and hreflang expect. */
export const OG_LOCALES: Record<string, string> = {
	en: "en_US",
	ru: "ru_RU",
};
