import { Link, Tag, TEXT_SIZES, Typography } from "@holakirr/snow-ui";
import Image from "next/image";

import MeImage from "#/public/me.jpeg";
import { Body } from "#/ui";
import { MailIcon, PhoneIcon, WebIcon } from "#/ui/icons";
import { PERSONAL } from "./const";

export const Header = () => (
	<header className="flex flex-col gap-6 print:flex-row md:flex-row md:items-center print:items-center">
		<Image
			src={MeImage}
			alt="Photo of me"
			className="transition-all w-screen md:w-60 md:h-60 print:w-60 print:h-60"
			placeholder="blur"
			blurDataURL={MeImage.blurDataURL}
			loading="lazy"
			quality={75}
		/>

		<div className="flex flex-1 flex-col gap-1 justify-between">
			<div className="flex flex-col py-5 md:py-10">
				<Typography as="h1" size={TEXT_SIZES[48]} semibold className="space-x-2 uppercase">
					<span className="text-black">{PERSONAL.firstName}</span>
					<span>{PERSONAL.lastName}</span>
				</Typography>
				<Typography
					as="h2"
					size={TEXT_SIZES[24]}
					semibold
					className="leading-6 uppercase text-gray-500"
				>
					{PERSONAL.position}
				</Typography>
			</div>

			<hr />

			{/* Description */}
			<div className="flex flex-col gap-2 items-start">
				<div className="flex gap-1">
					<Tag label={PERSONAL.address} />

					<Tag label="Worldwide" />

					<Tag label="Remote" />
				</div>

				<div className="flex gap-x-2 flex-wrap">
					<Link href={`tel:${PERSONAL.phone}`} className="flex gap-1 items-center">
						<PhoneIcon />
						<Body>{PERSONAL.phone}</Body>
					</Link>

					<Link href={`mailto:${PERSONAL.mail}`} className="flex gap-1 items-center">
						<MailIcon />
						<Body>{PERSONAL.mail}</Body>
					</Link>

					<Link href={PERSONAL.website} className="flex gap-1 items-center">
						<WebIcon />
						<Body>{PERSONAL.website}</Body>
					</Link>
				</div>
			</div>

			<hr />
		</div>
	</header>
);
