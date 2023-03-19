import styles from './layout.module.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  console.log(children);
  return <div className={styles.container}>{children}</div>;
}
