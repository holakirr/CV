import { Body, Section } from "#/ui";
import { PERSONAL } from "./const";

export const Bio = () => (
	<Section title="Profile">
		<Body>{PERSONAL.bio}</Body>
	</Section>
);
