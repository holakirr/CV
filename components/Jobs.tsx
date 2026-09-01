import type { Cv } from "#/lib/cv";
import { Project, Section } from "#/ui";

export const Jobs = ({ title, experience }: { title: string; experience: Cv["experience"] }) => (
	<Section title={title}>
		<div className="flex flex-col gap-2">
			{experience.map((entry) => (
				<Project key={`${entry.company}-${entry.startDate}`} {...entry} />
			))}
		</div>
	</Section>
);
