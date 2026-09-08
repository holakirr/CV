import { type Cv, groupSkills } from "#/lib/cv";
import { Body, Section } from "#/ui";

export const Skills = ({ title, skills }: { title: string; skills: Cv["skills"] }) => (
	<Section title={title} className="print:mt-8">
		{groupSkills(skills).map((group) => (
			<div key={group.type} className="flex flex-col print:flex-row">
				<Body className="underline underline-offset-4">{group.type}:</Body>
				<Body className="pl-2">{group.description}</Body>
			</div>
		))}
	</Section>
);
