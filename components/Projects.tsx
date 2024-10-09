import { Project, Section } from "@/ui";
import { PROJECTS } from "./const";

export const Projects = () => (
	<Section subtitle="Employment">
		<div className="flex flex-col gap-6 md:pl-2 print:gap-2">
			{PROJECTS.reverse().map((project) => (
				<Project key={project.title} {...project} />
			))}
		</div>
	</Section>
);
