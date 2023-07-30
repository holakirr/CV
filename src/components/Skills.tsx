import { Section } from '@/ui';
import { SKILLS } from './const';

export interface Skill {
	type: string;
	description: string;
}

export const Skills = () => {
	return (
		<Section subtitle='Technologies'>
			<ul className='flex flex-col gap-1 list-disc pl-4 md:pl-6'>
				{SKILLS.map(item => (
					<li key={item.type}>
						<u>{item.type}:</u> {item.description};
					</li>
				))}
			</ul>
		</Section>
	);
};
