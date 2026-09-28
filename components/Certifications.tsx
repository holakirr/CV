import type { Cv } from "#/lib/cv";

const label =
	"mb-3 text-[13px] font-extrabold uppercase tracking-[0.08em] text-gray-500 print:mb-2 print:text-[11px] print:tracking-[0.1em] print:text-gray-900";

/** Name plus issuer; a two-column grid on desktop, a list elsewhere. */
export const Certifications = ({
	title,
	certifications,
}: {
	title: string;
	certifications: Cv["certifications"];
}) => (
	<div>
		<h2 className={label}>{title}</h2>

		<ul className="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-x-6 print:flex print:gap-1">
			{certifications.map((certification) => {
				const body = (
					<>
						<span className="print:font-medium">{certification.name}</span>
						<span className="text-[12px] text-gray-500 print:text-[12px] print:before:content-['_·_']">
							{certification.issuer}
						</span>
					</>
				);

				return (
					<li key={certification.name} className="text-sm font-medium print:text-[12px]">
						{certification.url ? (
							<a
								href={certification.url}
								target="_blank"
								rel="noreferrer"
								className="flex flex-col print:inline print:text-gray-900 print:no-underline"
							>
								{body}
							</a>
						) : (
							<span className="flex flex-col print:inline">{body}</span>
						)}
					</li>
				);
			})}
		</ul>
	</div>
);
