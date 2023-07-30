import { Link, Section } from '@/ui';
import { LINKS } from './const';

export const Links = () => {
	return (
		<Section subtitle='Links'>
			<ul className='flex flex-col gap-1 list-disc pl-4 md:pl-6'>
				{LINKS.map(link => (
					<li key={link.title}>
						<Link href={link.url}>{link.title}</Link>
					</li>
				))}
			</ul>
		</Section>
	);
};
