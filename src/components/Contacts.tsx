import { Link, Section } from '@/ui';
import { LINKS } from './const';

export const Contacts = () => {
	return (
		<Section subtitle='Links' className='border-t-2 border-b-2 border-t-orange-700 border-b-orange-700'>
			<ul className='flex flex-wrap gap-3 md:gap-5'>
				{LINKS.map(link => (
					<li key={link.title}>
						<Link className='flex items-center gap-1' href={link.url}>
							<link.icon />
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</Section>
	);
};
