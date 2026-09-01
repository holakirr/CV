import { CvView } from "#/components/CvView";
import { fetchCv, type Locale } from "#/lib/cv";

/**
 * A server component: the CV is fetched at build time from the GraphQL API, so
 * the deployed page stays static and needs no client-side data loading.
 *
 * Tolgee still owns the interface labels; the CV content itself comes from the
 * API, which is the single place it is edited.
 */
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const cv = await fetchCv(locale as Locale);

	return <CvView cv={cv} />;
}
