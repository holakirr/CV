import { Body, Label } from "@/ui";
import { Link, TEXT_SIZES, Text } from "@holakirr/snow-ui";
import Image from "next/image";

import MeImage from "../public/me.jpg";
import { PERSONAL, PROJECTS } from "./const";

export const Header = () => (
	<header className="flex flex-col-reverse gap-16 md:gap-4 print:flex-row md:flex-row justify-between items-center md:h-auto md:p-6 xl:p-10 print:p-2 container mx-auto">
		{/* Text content */}
		<div className="p-4 flex flex-col gap-3 print:p-0 print:gap-1">
			<Text as="h1" size={TEXT_SIZES[64]} semibold className="print:text-2xl">
				{PERSONAL.name}
			</Text>
			{/* Description */}
			<div className="flex flex-col gap-2 items-start">
				<Text as="address">
					<Body>{PERSONAL.address}</Body>
				</Text>
				<Link href={`tel:${PERSONAL.phone}`}>
					<Body>{PERSONAL.phone}</Body>
				</Link>
				<Link href={`mailto:${PERSONAL.mail}`}>
					<Body>{PERSONAL.mail}</Body>
				</Link>
			</div>
			<Label>
				<u>
					{PERSONAL.position},&nbsp;
					{new Date().getFullYear() - (PROJECTS[0]?.start?.getFullYear() ?? 0)}+
					years
				</u>
			</Label>
		</div>
		<Image
			src={MeImage}
			alt="Photo of me"
			className="transition-all w-screen md:w-96 rounded-lg hover:rounded-3xl print:md:w-56 print:w-48"
			width={384}
			placeholder="blur"
			blurDataURL={MeImage.blurDataURL}
			loading="lazy"
			quality={70}
		/>
	</header>
);
