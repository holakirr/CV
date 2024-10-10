"use client";
import { Section } from "@/ui";
import { Button, Link } from "holakirr-snow-ui";
import { LINKS } from "./const";

export const Contacts = () => {
	const downloadHandler = () => {
		window.open("/cv.pdf", "_blank");
	};

	return (
		<Section
			tag="footer"
			subtitle="Links"
			className="p-4 md:p-6 xl:p-10 flex flex-col gap-6 border-t-2 border-t-orange-700 items-start print:hidden"
		>
			<ul className="flex flex-wrap gap-3 md:gap-5">
				{LINKS.map((link) => (
					<li key={link.title}>
						<Link className="flex items-center gap-2" href={link.url}>
							<link.icon width={20} height={20} />
							{link.title}
						</Link>
					</li>
				))}
			</ul>
			<Button
				label="Download CV"
				variant="filled"
				onClick={downloadHandler}
				className="self-start"
			>
				Download CV
			</Button>
		</Section>
	);
};
