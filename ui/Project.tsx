import clsx from 'clsx'
import { getTranslate } from '#/tolgee/server'
import { Body } from '.'

export type Project = {
	start: Date
	end?: Date
}

type ProjectProps = React.ComponentProps<'div'> &
	Project & {
		id: number
	}

export const Project = async ({ start, end, id }: ProjectProps) => {
	const t = await getTranslate()

	return (
		<div
			className={clsx(
				'relative flex flex-col gap-1 print:break-inside-avoid',
				"before:content-none md:before:content-[''] before:absolute before:w-2 before:h-2 before:bg-gray-400 before:rounded-full before:-left-4 before:top-4",
				"after:content-none md:after:content-[''] after:absolute after:w-4 after:h-4 after:border after:border-gray-400 after:rounded-full after:-left-5 after:top-3"
			)}
		>
			{/* Head */}
			<div className="flex gap-x-2">
				<div className="flex flex-col">
					<Body className="uppercase font-extralight text-slate-500 whitespace-nowrap">
						{start.toLocaleString('en-US', { month: 'short', year: 'numeric' })}
					</Body>

					<Body className="uppercase font-extralight text-slate-500 whitespace-nowrap">
						{end
							? end?.toLocaleString('en-US', {
									month: 'short',
									year: 'numeric',
							  })
							: 'Present'}
					</Body>
				</div>

				<hr className="w-px h-auto bg-gray-200" />

				<div className="flex flex-col">
					<Body>{t(`jobs.projects[${id}].title`)}</Body>

					<Body className="font-bold uppercase">
						{t(`jobs.projects[${id}].role`)}
					</Body>
				</div>
			</div>

			<hr />

			{/* Body */}
			<ul className="flex flex-col list-disc pl-4">
				{new Array(3).fill(0).map((_, index) => (
					<li
						key={t(`jobs.projects[${id}].points[${index}]`)}
						className="list-item text-sm max-w-3xl"
					>
						{t(`jobs.projects[${id}].points[${index}]`)}
					</li>
				))}
			</ul>
		</div>
	)
}
