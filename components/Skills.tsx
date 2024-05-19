import { Section } from "@/ui";
import { SKILLS } from "./const";

export const Skills = () => (
	<Section subtitle="Technologies">
		<ul className="flex flex-col gap-4 list-disc pl-4 md:pl-6">
			{SKILLS.map((item) => (
				<li key={item.type} className="max-w-3xl">
					<u>{item.type}:</u> {item.description};
				</li>
			))}
		</ul>
	</Section>
);
