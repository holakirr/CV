import { Additional, Header, Projects, Skills } from '@/components';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-white md:p-6 xl:p-10'>
			<Header />
			<Projects />
			<Additional />
			<Skills />
		</main>
	);
}
