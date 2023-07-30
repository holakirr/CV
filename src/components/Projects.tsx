import { Project, Subtitle } from '@/ui';
import { PROJECTS } from './const';

export const Projects = () => (
	<section className='p-4 flex flex-col gap-4'>
		<Subtitle className='mb-4'>Employment</Subtitle>
		{/* Content */}
		<div className='flex flex-col gap-4 md:pl-2'>
			{PROJECTS.map((project, index) => (
				<Project key={index} {...project} />
			))}
		</div>
	</section>
);
