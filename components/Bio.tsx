import type { Cv } from "#/lib/cv";

/** The profile paragraph: a labelled row on desktop, bare text on the phone and on paper. */
export const Bio = ({ title, description }: { title: string; description: Cv["description"] }) => (
	<section className="px-5 pt-7 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8 lg:px-[72px] lg:pt-11 print:mx-12 print:mt-3.5 print:block print:border-t-2 print:border-gray-900 print:px-0 print:pt-2.5">
		<h2 className="hidden pt-1 text-[13px] font-extrabold uppercase tracking-[0.08em] text-gray-500 lg:block print:hidden">
			{title}
		</h2>

		<p className="text-[15px] leading-[1.6] text-gray-800 text-pretty lg:max-w-[900px] lg:text-[17px] lg:leading-[1.65] print:text-[12.5px] print:leading-[1.5]">
			{description}
		</p>
	</section>
);
