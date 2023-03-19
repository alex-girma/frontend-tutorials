import Layout from '@/components/nextjs/layout/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/nextjs">Back to Posts</Link>
    </Layout>
  );
}
