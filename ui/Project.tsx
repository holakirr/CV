import clsx from "clsx";

import type { Cv } from "#/lib/cv";
import { Body } from ".";

type ProjectProps = Cv["experience"][number];

/**
 * The API already formats the period ("Nov 2024 — Present") in the requested
 * locale, so the two halves are split back out here rather than re-derived
 * from the dates.
 */
const splitPeriod = (period: string): [string, string] => {
	const [start = period, end = ""] = period.split("—").map((part) => part.trim());

	return [start, end];
};

export const Project = ({ company, position, period, summary, achievements }: ProjectProps) => {
	const [start, end] = splitPeriod(period);

	return (
		<div
			className={clsx(
				"relative flex flex-col gap-1 print:break-inside-avoid",
				"before:content-none md:before:content-[''] before:absolute before:w-2 before:h-2 before:bg-gray-400 before:rounded-full before:-left-4 before:top-4",
				"after:content-none md:after:content-[''] after:absolute after:w-4 after:h-4 after:border after:border-gray-400 after:rounded-full after:-left-5 after:top-3"
			)}
		>
			<div className="flex gap-x-2">
				<div className="flex flex-col">
					<Body className="uppercase font-extralight text-slate-500 whitespace-nowrap">
						{start}
					</Body>

					<Body className="uppercase font-extralight text-slate-500 whitespace-nowrap">{end}</Body>
				</div>

				<hr className="w-px h-auto bg-gray-200" />

				<div className="flex flex-col">
					<Body>{company}</Body>

					<Body className="font-bold uppercase">{position}</Body>
				</div>
			</div>

			<hr />

			{summary && <Body>{summary}</Body>}

			{achievements.length > 0 && (
				<ul className="flex flex-col list-disc pl-4 md:pl-6">
					{achievements.map((achievement) => (
						<li key={achievement.description}>
							<Body>{achievement.description}</Body>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
