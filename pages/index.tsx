import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Tutorials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Frontend Tutorial</main>
      <Link href="/nextjs">NextJS</Link>
    </>
  );
}
