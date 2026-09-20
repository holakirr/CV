import type { MetadataRoute } from "next";

import { SITE_URL } from "#/constants/meta";

/**
 * Emitted as a static /robots.txt by `output: "export"`. The site is meant to
 * be found — the metadata already asks for indexing — so the only job here is
 * to point crawlers at the sitemap.
 */
/** `output: "export"` needs the route pinned; it is generated once, at build. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${SITE_URL}/sitemap.xml`,
		host: SITE_URL,
	};
}
