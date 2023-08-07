import { Link, Section } from '@/ui';
import { Button } from '@/ui/Button';
import { LINKS } from './const';

export const Contacts = () => (
	<Section
		tag='footer'
		subtitle='Links'
		className='p-4 md:p-6 xl:p-10 flex flex-col gap-4 border-t-2 border-t-orange-700 items-start print:hidden'
	>
		<ul className='flex flex-wrap gap-3 md:gap-5'>
			{LINKS.map(link => (
				<li key={link.title}>
					<Link className='flex items-center gap-2' href={link.url}>
						<link.icon width={20} height={20} />
						{link.title}
					</Link>
				</li>
			))}
		</ul>
		<Button href='/cv.pdf' download='Kirill_Petunin_CV'>
			Download CV
		</Button>
	</Section>
);
