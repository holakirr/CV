import type { Cv } from "#/lib/cv";
import { displayUrl } from "#/lib/cv-view";

const label =
	"mb-3 text-[13px] font-extrabold uppercase tracking-[0.08em] text-gray-500 print:mb-2 print:text-[11px] print:tracking-[0.1em] print:text-gray-900";

/** Social links: tags on the phone, a plain list on desktop, label plus domain on paper. */
export const Contacts = ({
	title,
	socialLinks,
}: {
	title: string;
	socialLinks: Cv["socialLinks"];
}) => (
	<div>
		<h2 className={label}>{title}</h2>

		<ul className="flex flex-wrap gap-2 lg:flex-col print:flex-col print:gap-0.5">
			{socialLinks.map((link) => (
				<li key={link.url}>
					<a
						href={link.url}
						target="_blank"
						rel="noreferrer"
						className="inline-block rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-bold text-orange-800 hover:bg-orange-50 hover:no-underline lg:border-0 lg:p-0 lg:font-medium lg:text-orange-700 print:border-0 print:p-0 print:text-[12px] print:font-medium print:text-gray-900"
					>
						{link.label}
						{displayUrl(link.url) !== link.label && (
							<span className="hidden text-gray-600 print:inline"> {displayUrl(link.url)}</span>
						)}
					</a>
				</li>
			))}
		</ul>
	</div>
);
