import styles from "./albums.module.css";

export default function Loading() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <p className={styles.status}>Завантаження даних...</p>
      </div>
    </main>
  );
}