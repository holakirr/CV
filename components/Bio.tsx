import { Body, Section } from "#/ui";
import { CONTACTS } from "./const";

export const Bio = () => (
	<Section title="Profile">
		<Body>{CONTACTS.bio}</Body>
	</Section>
);
