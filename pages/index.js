import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Go NoteMe</title>
				<meta
					name='description'
					content='Go NoteMe is a simple yet powerful way to save your instant thoughts and share it with others on the web.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Hello, go noteme!</h1>
				<div className={styles.description}>
					<a
						className={styles.loginItem}
						target='_blank'
						href='https://nuriddinislamov.com/me'
						rel='noopener noreferrer'>
						Sign in
					</a>
					<a
						className={styles.loginItem}
						target='_blank'
						href='https://nuriddinislamov.com'>
						Register
					</a>
				</div>
			</main>
		</div>
	);
}
