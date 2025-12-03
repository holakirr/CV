import clsx from "clsx";
import { Body } from ".";

export type Project = {
	title: string;
	role: string;
	points: string[];
	start?: Date;
	end?: Date;
};

type ProjectProps = React.ComponentProps<"div"> & Project;

export const Project = ({ title, role, points, start, end }: ProjectProps) => (
	<div
		className={clsx(
			"relative flex flex-col gap-1 print:break-inside-avoid",
			"before:content-none md:before:content-[''] before:absolute before:w-2 before:h-2 before:bg-gray-400 before:rounded-full before:-left-4 before:top-4",
			"after:content-none md:after:content-[''] after:absolute after:w-4 after:h-4 after:border after:border-gray-400 after:rounded-full after:-left-5 after:top-3"
		)}
	>
		{/* Head */}
		<div className="flex gap-x-2">
			<div className="flex flex-col">
				<Body className="uppercase font-extralight text-slate-500 whitespace-nowrap">
					{start?.toLocaleString("en-US", { month: "short", year: "numeric" })}
				</Body>

				<Body className="uppercase font-extralight text-slate-500 whitespace-nowrap">
					{end ? end?.toLocaleString("en-US", { month: "short", year: "numeric" }) : "Present"}
				</Body>
			</div>

			<hr className="w-px h-auto bg-gray-200" />

			<div className="flex flex-col">
				<Body>{title}</Body>

				<Body className="font-bold uppercase">{role}</Body>
			</div>
		</div>

		<hr />

		{/* Body */}
		<ul className="flex flex-col list-disc pl-4">
			{points.map((point) => (
				<li key={point} className="list-item text-sm max-w-3xl">
					{point}
				</li>
			))}
		</ul>
	</div>
);
