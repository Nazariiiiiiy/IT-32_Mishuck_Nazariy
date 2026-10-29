import styles from "./albums.module.css";

type Album = {
  id: number;
  userId: number;
  title: string;
};


export default async function AlbumsPage() {
    
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums?_limit=8",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Помилка завантаження альбомів");
  }

  const albums: Album[] = await res.json();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Фотоальбоми</h1>
        <p className={styles.total}>
          Завантажено альбомів: <strong>{albums.length}</strong>
        </p>

        <div className={styles.grid}>
          {albums.map((album) => (
            <article key={album.id} className={styles.card}>
              <h2 className={styles.albumTitle}>{album.title}</h2>
              <div className={styles.meta}>
                <span className={styles.badge}>ID: {album.id}</span>
                <span className={styles.badge}>userId: {album.userId}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}