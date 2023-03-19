import Head from 'next/head';
import Layout from '@/components/nextjs/layout/layout';
import utilStyles from '../../styles/utils.module.css';

import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function NextJS({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>NextJS Tutorial</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>NextJS Tutorial</h1>
        <p>Hi, I am Alemayehu</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
