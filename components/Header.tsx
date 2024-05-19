import { Body, Label, Link, Title } from "@/ui";
import Image from "next/image";

import MeImage from "/public/me.jpg";

export const Header = () => (
	<header className="flex flex-col-reverse gap-16 md:gap-4 print:flex-row md:flex-row justify-between items-center md:h-auto md:p-6 xl:p-10 print:p-2 print:md:p-2 print:xl:p-2 container mx-auto">
		{/* Text content */}
		<div className="p-4 flex flex-col gap-3 print:p-0">
			<Title className="">Kirill Petunin</Title>
			{/* Description */}
			<div className="flex flex-col gap-2 items-start">
				<address>
					<Body>México, Guadalajara</Body>
				</address>
				<Link href="tel:+523343469939">
					<Body>+52 3343469939</Body>
				</Link>
				<Link href="mailto:kpetunin@proton.me">
					<Body>kpetunin@proton.me</Body>
				</Link>
			</div>
			<Label className="text-xl">
				<u>Frontend developer, 5+ years</u>
			</Label>
		</div>
		<Image
			src={MeImage}
			alt="Photo of me"
			className="transition-all w-screen md:w-96 hover:rounded-3xl print:md:w-56 print:w-48"
			width={384}
			placeholder="blur"
			blurDataURL={MeImage.blurDataURL}
			loading="lazy"
			quality={70}
		/>
	</header>
);
