import { Link, Tag, TEXT_SIZES, Typography } from "@holakirr/snow-ui";
import Image from "next/image";

import type { Cv } from "#/lib/cv";
import MeImage from "#/public/me.jpeg";
import { Body } from "#/ui";
import { MailIcon, PhoneIcon, WebIcon } from "#/ui/icons";

/** The API stores one full name; the design sets the two halves differently. */
const splitName = (name: string): [string, string] => {
	const [first = name, ...rest] = name.split(" ");

	return [first, rest.join(" ")];
};

export const Header = ({ cv }: { cv: Cv }) => {
	const [firstName, lastName] = splitName(cv.name);
	const websiteLabel = cv.website?.replace(/^https?:\/\//, "");

	return (
		<header className="flex flex-col gap-6 print:flex-row md:flex-row md:items-center print:items-center">
			<Image
				src={MeImage}
				alt="Photo of me"
				className="transition-all w-screen md:size-60 print:size-60"
				width={440}
				height={440}
				placeholder="blur"
				blurDataURL={MeImage.blurDataURL}
				loading="lazy"
				quality={75}
			/>

			<div className="flex flex-1 flex-col gap-1 justify-between">
				<div className="flex flex-col py-5 md:py-10">
					<Typography
						as="h1"
						size={TEXT_SIZES[48]}
						semibold
						className="flex gap-x-2 flex-wrap uppercase"
					>
						<span className="text-black">{firstName}</span>
						<span>{lastName}</span>
					</Typography>
					<Typography
						as="h2"
						size={TEXT_SIZES[24]}
						semibold
						className="leading-6 uppercase text-gray-500"
					>
						{cv.headline}
					</Typography>
				</div>

				<hr />

				<div className="flex flex-col gap-2 items-start">
					<div className="flex gap-1">
						<Tag label={cv.location} />

						<Tag label={cv.availability} />
					</div>

					<div className="flex gap-x-2 flex-wrap">
						{cv.phone && (
							<Link href={`tel:${cv.phone}`} className="flex gap-1 items-center">
								<PhoneIcon />
								<Body>{cv.phone}</Body>
							</Link>
						)}

						<Link href={`mailto:${cv.email}`} className="flex gap-1 items-center">
							<MailIcon />
							<Body>{cv.email}</Body>
						</Link>

						{cv.website && (
							<Link href={cv.website} target="_blank" className="flex gap-1 items-center">
								<WebIcon />
								<Body>{websiteLabel}</Body>
							</Link>
						)}
					</div>
				</div>

				<hr />
			</div>
		</header>
	);
};
