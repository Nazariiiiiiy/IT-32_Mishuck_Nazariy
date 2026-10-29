"use client"; 

import styles from "./albums.module.css";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.errorBox}>
          <p>Не вдалося отримати дані.</p>
          <button className={styles.button} onClick={() => reset()}>
            Спробувати ще раз
          </button>
        </div>
      </div>
    </main>
  );
}