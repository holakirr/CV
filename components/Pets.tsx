import type { Cv } from "#/lib/cv";
import { projectLinks } from "#/lib/cv-view";
import { Section } from "#/ui";

/** Four columns on desktop, a stack on the phone; on paper the links carry their domain. */
export const Pets = ({ title, projects }: { title: string; projects: Cv["projects"] }) => (
	<Section title={title}>
		<div className="flex flex-col gap-6 lg:grid lg:grid-cols-4 lg:gap-10 print:grid print:grid-cols-2 print:gap-x-7 print:gap-y-3.5">
			{projects.map((project) => (
				<article
					key={project.name}
					className="flex break-inside-avoid flex-col gap-2 border-t-[3px] border-orange-500 pt-3.5 print:gap-0 print:border-t-2 print:border-gray-900 print:pt-2"
				>
					<h3 className="text-[17px] font-extrabold print:text-[13px]">{project.name}</h3>

					<p className="text-sm leading-[1.5] text-gray-600 text-pretty print:mt-[3px] print:text-[12px] print:leading-[1.45] print:text-gray-700">
						{project.description}
					</p>

					<div className="mt-0.5 flex flex-wrap gap-1.5 print:mt-1 print:gap-2.5">
						{projectLinks(project).map((link) => (
							<a
								key={link.url}
								href={link.url}
								target="_blank"
								rel="noreferrer"
								className="rounded-md border-[1.5px] border-orange-500 px-3 py-2 text-[13px] font-bold text-orange-800 hover:bg-orange-50 hover:no-underline lg:px-2 lg:py-0.5 lg:text-[12px] print:rounded-none print:border-0 print:p-0 print:text-[11px] print:text-gray-900 print:underline"
							>
								{link.label}
								<span className="print:hidden"> ↗</span>
								<span className="hidden font-medium text-gray-600 print:inline">
									{" "}
									{link.domain}
								</span>
							</a>
						))}
					</div>
				</article>
			))}
		</div>
	</Section>
);
