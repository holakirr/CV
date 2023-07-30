import { Project, Section } from '@/ui';
import { PROJECTS } from './const';

export const Projects = () => (
	<Section subtitle='Employment'>
		<div className='flex flex-col gap-4 md:pl-2'>
			{PROJECTS.map((project, index) => (
				<Project key={index} {...project} />
			))}
		</div>
	</Section>
);
