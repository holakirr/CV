import { Body, Label, Title } from '@/ui';
import Image from 'next/image';
import Link from 'next/link';
import MeImage from '/public/me.jpg';

export const Header = () => {
	return (
		<header className='flex flex-col md:flex-row justify-between items-center h-screen md:h-auto'>
			{/* Text content */}
			<div className='p-4 flex flex-col gap-3'>
				<Title className=''>Kirill Petunin</Title>
				{/* Description */}
				<div className='flex flex-col gap-2'>
					<Body>México, Guadalajara</Body>
					<Link href='tel:+523343469939'>+52 3343469939</Link>
					<Link href='mailto:kpetunin@proton.me'>kpetunin@proton.me</Link>
				</div>
				<Label className='underline text-xl'>Frontend developer, 5+ years</Label>
			</div>
			<Image src={MeImage} alt='Photo of me' className='w-screen md:w-96' />
		</header>
	);
};
