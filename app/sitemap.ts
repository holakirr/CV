import type { MetadataRoute } from "next";

import { OG_LOCALES, SITE_URL } from "#/constants/meta";
import { ALL_LANGUAGES, DEFAULT_LANGUAGE } from "#/tolgee/shared";

/**
 * One entry per locale, each listing the other as an hreflang alternate, so a
 * crawler that lands on either language knows the pair is one document.
 *
 * `lastModified` is build time: the CV ships as a committed snapshot, so a
 * deploy is exactly when its content can have changed.
 */
/** `output: "export"` needs the route pinned; it is generated once, at build. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const languages = Object.fromEntries(
		ALL_LANGUAGES.map((lang) => [OG_LOCALES[lang].replace("_", "-"), `${SITE_URL}/${lang}`])
	);

	return ALL_LANGUAGES.map((lang) => ({
		url: `${SITE_URL}/${lang}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: lang === DEFAULT_LANGUAGE ? 1 : 0.8,
		alternates: { languages },
	}));
}
