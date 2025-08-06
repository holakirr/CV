import { Link } from "@holakirr/snow-ui";
import clsx from "clsx";
import { Fragment } from "react";

import { Section } from "#/ui";
import { SKILLS } from "./const";

export const Skills = () => (
	<Section subtitle="Skills and Achievements">
		<ul className="flex flex-col gap-4 list-disc pl-4 md:pl-6">
			{SKILLS.map((additional) => (
				<li key={additional.name} className="max-w-3xl">
					<b>{additional.name}: </b>
					{additional.items.map((item, i) => {
						const addSemi = i !== additional.items.length - 1 ? ", " : "";
						const className = item.bold ? "font-bold" : "";
						return (
							<Fragment key={item.title}>
								{item.link ? (
									<Link className={clsx("text-base", className)} href={item.link} key={item.title}>
										{item.title}
									</Link>
								) : (
									<span className={className} key={item.title}>
										{item.title}
									</span>
								)}
								{addSemi}
							</Fragment>
						);
					})}
				</li>
			))}
		</ul>
	</Section>
);
