import { Link } from "@holakirr/snow-ui";

import { Section } from "#/ui";
import { CERTIFICATIONS } from "./const";

export const Skills = () => (
	<Section title="Certification">
		<ul className="flex flex-col list-disc pl-4 md:pl-6">
			{CERTIFICATIONS.map(({ link, title }) => (
				<li key={title}>
					<Link className="text-sm" href={link} key={title}>
						{title}
					</Link>
				</li>
			))}
		</ul>
	</Section>
);
