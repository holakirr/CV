import { Link } from "@holakirr/snow-ui";

import type { Cv } from "#/lib/cv";
import { Section } from "#/ui";

export const Certifications = ({
	title,
	certifications,
}: {
	title: string;
	certifications: Cv["certifications"];
}) => (
	<Section title={title}>
		<ul className="flex flex-col list-disc pl-4 md:pl-6">
			{certifications.map((certification) => (
				<li key={certification.name}>
					{certification.url ? (
						<Link className="text-sm" href={certification.url} target="_blank">
							{certification.name}
						</Link>
					) : (
						<span className="text-sm">{certification.name}</span>
					)}
				</li>
			))}
		</ul>
	</Section>
);
