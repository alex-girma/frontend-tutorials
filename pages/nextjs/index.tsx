import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function NextJS() {
  return (
    <>
      <Head>
        <title>NextJS Tutorial</title>
      </Head>
      <h1>NextJS Tutorial</h1>
      <Link href="/">Back to Home</Link>
      <Link href="nextjs/posts/first-post">First Post</Link>
    </>
  );
}
