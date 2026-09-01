import type { Cv } from "#/lib/cv";
import { Body, Section } from "#/ui";

export const Bio = ({ title, description }: { title: string; description: Cv["description"] }) => (
	<Section title={title}>
		<Body>{description}</Body>
	</Section>
);
