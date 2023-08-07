import { Additional, Contacts, Header, Projects, Skills } from '@/components';

const Home = () => (
	<main className='flex min-h-screen flex-col gap-10 border-4 rounded-3xl overflow-hidden border-black m-2 md:m-4 print:p-0 print:border-none print:m-0 print:md:m-0 print:rounded-none print:gap-0'>
		<Header />
		<Projects />
		<Additional />
		<Skills />
		<Contacts />
	</main>
);

export default Home;
