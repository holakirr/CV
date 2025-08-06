import { Section } from "#/ui";
import { TECHNOLOGIES } from "./const";

export const Technologies = () => (
	<Section subtitle="Tech Stack" className="print:mt-8">
		<ul className="flex flex-col gap-4 list-disc pl-4 md:pl-6">
			{TECHNOLOGIES.map((item) => (
				<li key={item.type} className="max-w-3xl">
					<u>{item.type}:</u> {item.description}
				</li>
			))}
		</ul>
	</Section>
);
