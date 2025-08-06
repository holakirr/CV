import { Contacts, Developed, Header, Projects, Skills, Technologies } from "#/components";

const Home = () => (
	<main className="flex flex-col border-4 rounded-3xl overflow-hidden border-black mx-auto w-fit my-2 md:my-4 print:p-0 print:border-none print:rounded-none">
		<Header />
		<Projects />
		<Technologies />
		<Skills />
		<Contacts />
		<Developed />
	</main>
);

export default Home;
