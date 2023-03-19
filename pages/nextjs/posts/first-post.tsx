import Layout from '@/components/nextjs/layout/layout';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <Layout home>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
