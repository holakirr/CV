import { Body, ProjectPoint } from ".";

export type Project = {
	title: string;
	description: string;
	role: string;
	points: string[];
	start?: Date;
	end?: Date;
};

type ProjectProps = React.ComponentProps<"div"> & Project;

export const Project = ({
	title,
	role,
	description,
	points,
	start,
	end,
}: ProjectProps) => (
	<div className="flex flex-col gap-3">
		{/* Head */}
		<div className="flex flex-col md:flex-row justify-between print:flex-row gap-2">
			<div className="flex flex-col md:flex-row md:items-baseline gap-2 print:flex-row print:gap-2">
				<div className="flex flex-col md:flex-row md:gap-1 flex-wrap print:flex-row">
					<Body>
						<b>{title}</b>
					</Body>
					<Body>
						<b>({description})</b>
					</Body>
				</div>
				<Body className="hidden md:block">&#8212;</Body>
				<Body>{role}</Body>
			</div>
			<Body className="uppercase font-extralight text-slate-500 whitespace-nowrap">
				{start?.toLocaleString("default", { month: "short", year: "numeric" })}{" "}
				- {end?.toLocaleString("default", { month: "short", year: "numeric" })}
			</Body>
		</div>
		{/* Body */}
		<ul className="flex flex-col gap-2 list-disc pl-4 md:pl-6">
			{points.map((point) => (
				<ProjectPoint key={point}>{point}</ProjectPoint>
			))}
		</ul>
	</div>
);
