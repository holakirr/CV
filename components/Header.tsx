import { Link, TEXT_SIZES, Typography } from "@holakirr/snow-ui";
import Image from "next/image";

import MeImage from "#/public/me.jpg";
import { Body, Label } from "#/ui";
import { DownloadCVBtn } from "#/ui/DownloadCVButton";
import { PERSONAL, PROJECTS } from "./const";

export const Header = () => (
	<header className="flex flex-col-reverse gap-4 md:gap-4 print:flex-row md:flex-row justify-between md:items-center md:p-6 xl:p-10 print:p-1 container mx-auto">
		{/* Text content */}
		<div className="flex flex-col gap-3 print:gap-1">
			<Typography as="h1" size={TEXT_SIZES[64]} semibold className="print:text-2xl">
				{PERSONAL.name}
			</Typography>
			{/* Description */}
			<div className="flex flex-col gap-2 items-start">
				<Typography as="address">
					<Body>{PERSONAL.address}</Body>
				</Typography>
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
					{new Date().getFullYear() - (PROJECTS[0]?.start?.getFullYear() ?? 0)}+ years
				</u>
			</Label>
			<DownloadCVBtn />
		</div>
		<Image
			src={MeImage}
			alt="Photo of me"
			className="transition-all w-screen md:w-96 rounded-lg hover:rounded-3xl print:w-48 aspect-square"
			placeholder="blur"
			blurDataURL={MeImage.blurDataURL}
			loading="lazy"
			quality={70}
		/>
	</header>
);
