import { CATEGORY_LABELS, type Cv, type SkillCategory } from "#/lib/cv";
import { Section } from "#/ui";

type Group = { category: SkillCategory; label: string; names: string[] };

const groupsOf = (skills: Cv["skills"]): Group[] => {
	const groups = new Map<SkillCategory, Group>();

	for (const skill of skills) {
		const group = groups.get(skill.category);

		if (group) {
			group.names.push(skill.name);
		} else {
			groups.set(skill.category, {
				category: skill.category,
				label: CATEGORY_LABELS[skill.category],
				names: [skill.name],
			});
		}
	}

	return [...groups.values()];
};

/** Chips in a 3×2 grid on desktop, stacked on the phone, dot-separated text on paper. */
export const Skills = ({ title, skills }: { title: string; skills: Cv["skills"] }) => (
	<Section title={title} className="print:break-before-page print:pt-8">
		<div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-3 print:grid print:grid-cols-2 print:gap-x-7 print:gap-y-2">
			{groupsOf(skills).map((group) => (
				<div
					key={group.category}
					className="break-inside-avoid lg:rounded-[10px] lg:border lg:border-gray-200 lg:px-[18px] lg:py-4 print:rounded-none print:border-0 print:border-b print:border-gray-200 print:px-0 print:pt-0 print:pb-2"
				>
					<h3 className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.06em] text-gray-900 lg:mb-2.5 lg:text-[13px] print:mb-1 print:text-[11px]">
						{group.label}{" "}
						<span className="font-medium text-gray-400 print:hidden">{group.names.length}</span>
					</h3>

					<ul className="flex flex-wrap gap-1.5 print:hidden">
						{group.names.map((name) => (
							<li
								key={name}
								className="rounded-md bg-gray-100 px-2 py-[3px] text-[13px] font-medium text-gray-700 lg:px-[9px]"
							>
								{name}
							</li>
						))}
					</ul>

					<p className="hidden text-[12px] leading-[1.5] text-gray-700 print:block">
						{group.names.join(" · ")}
					</p>
				</div>
			))}
		</div>
	</Section>
);
