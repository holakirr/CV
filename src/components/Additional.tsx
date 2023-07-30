import { Section } from '@/ui';
import { ADDITIONAL } from './const';

export interface AdditionalItem {
	name: string;
	description: string;
}

export const Additional = () => {
	return (
		<Section subtitle='Additional Experience and Achievements'>
			<ul className='flex flex-col gap-1 list-disc pl-4 md:pl-6'>
				{ADDITIONAL.map(item => (
					<li key={item.name}>
						<b>{item.name}:</b> {item.description}
					</li>
				))}
			</ul>
		</Section>
	);
};
