import { Additional, Header, Projects, Skills } from '@/components';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col gap-10 bg-white md:p-6 xl:p-10'>
			<Header />
			<Projects />
			<Additional />
			<Skills />
		</main>
	);
}
