import { Link } from "@holakirr/snow-ui";

import { Section } from "#/ui";
import { LINKS } from "./const";

export const Contacts = () => (
	<Section
		tag="footer"
		subtitle="Links"
		className="p-4 md:p-6 xl:p-10 flex flex-col gap-6 border-t-4 border-t-black items-start print:border-0"
	>
		<ul className="flex flex-wrap gap-3 md:gap-5">
			{LINKS.map((link) => (
				<li key={link.title}>
					<Link className="flex items-center gap-2 text-base" href={link.url}>
						<link.icon width={20} height={20} />
						{link.title}
					</Link>
				</li>
			))}
		</ul>
	</Section>
);
