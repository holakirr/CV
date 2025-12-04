import { Body, Section } from "#/ui";
import { TECH_STACK } from "./const";

export const Technologies = () => (
	<Section title="Tech Stack" className="print:mt-8">
		{TECH_STACK.map((item) => (
			<div key={item.type} className="flex flex-col print:flex-row">
				<Body className="underline underline-offset-4">{item.type}:</Body>
				<Body className="pl-2">{item.description}</Body>
			</div>
		))}
	</Section>
);
