import { Body, Label, Link, Title } from '@/ui';
import Image from 'next/image';

import MeImage from '/public/me.jpg';

export const Header = () => (
	<header className='flex flex-col-reverse md:flex-row justify-between items-center h-[100svh] md:h-auto md:p-6 xl:p-10'>
		{/* Text content */}
		<div className='p-4 flex flex-col gap-3'>
			<Title className=''>Kirill Petunin</Title>
			{/* Description */}
			<div className='flex flex-col gap-2'>
				<address>
					<Body>México, Guadalajara</Body>
				</address>
				<Link href='tel:+523343469939'>
					<Body>+52 3343469939</Body>
				</Link>
				<Link href='mailto:kpetunin@proton.me'>
					<Body>kpetunin@proton.me</Body>
				</Link>
			</div>
			<Label className='underline text-xl'>Frontend developer, 5+ years</Label>
		</div>
		<Image
			src={MeImage}
			alt='Photo of me'
			className='transition-all w-screen md:w-96 hover:rounded-3xl'
			width={384}
			placeholder='blur'
			blurDataURL={MeImage.blurDataURL}
			loading='lazy'
		/>
	</header>
);
