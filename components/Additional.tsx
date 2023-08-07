import { Link, Section } from '@/ui';
import { ADDITIONAL } from './const';

export const Additional = () => (
	<Section subtitle='Additional Experience and Achievements'>
		<ul className='flex flex-col gap-1 list-disc pl-4 md:pl-6'>
			{ADDITIONAL.map(additional => (
				<li key={additional.name}>
					<b>{additional.name}: </b>
					{additional.items.map((item, i) => {
						const addSemi = i !== additional.items.length - 1 ? ', ' : '';
						const className = item.bold ? 'font-bold' : '';
						return (
							<>
								{item.link ? (
									<Link className={className} href={item.link} key={item.title}>
										{item.title}
									</Link>
								) : (
									<span className={className} key={item.title}>
										{item.title}
									</span>
								)}
								{addSemi}
							</>
						);
					})}
				</li>
			))}
		</ul>
	</Section>
);
