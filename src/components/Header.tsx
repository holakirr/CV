import { Body, Label, Title } from '@/ui';
import Image from 'next/image';
import Link from 'next/link';
import MeImage from '/public/me.jpg';

export const Header = () => (
	<header className='flex flex-col-reverse md:flex-row justify-between items-center h-screen md:h-auto'>
		{/* Text content */}
		<div className='p-4 flex flex-col gap-3'>
			<Title className=''>Kirill Petunin</Title>
			{/* Description */}
			<div className='flex flex-col gap-2'>
				<address>
					<Body>México, Guadalajara</Body>
				</address>
				<Link className='transition-all text-orange-400 hover:text-red-400 hover:underline' href='tel:+523343469939'>
					<Body>+52 3343469939</Body>
				</Link>
				<Link
					className='transition-all text-orange-400 hover:text-red-400 hover:underline'
					href='mailto:kpetunin@proton.me'
				>
					<Body>kpetunin@proton.me</Body>
				</Link>
			</div>
			<Label className='underline text-xl'>Frontend developer, 5+ years</Label>
		</div>
		<Image src={MeImage} alt='Photo of me' className='transition-all w-screen md:w-96 hover:rounded-3xl' width={384} />
	</header>
);
