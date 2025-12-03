import { Project, Section } from "#/ui";
import { PROJECTS } from "./const";

export const Projects = () => (
	<Section title="Work Experience">
		<div className="flex flex-col gap-2">
			{PROJECTS.map((project) => <Project key={project.title} {...project} />).reverse()}
		</div>
	</Section>
);
