import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../../styles/utils.module.css';
import Link from 'next/link';

const name = 'Alemayehu';
export const siteTitle = 'Frontend Tutorials';
export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/nextjs" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/nextjs">← Back to home</Link>
          </div>
        )}
      </header>
    </div>
  );
}
