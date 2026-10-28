
import InteractiveList from "./InteractiveList";
import type { Course } from "./InteractiveList";
import styles from "./practice.module.css";

export default async function PracticePage() {

  const courses: Course[] = await Promise.resolve([
    { id: 1, title: "Основи HTML і CSS", level: "початковий", hours: 20 },
    { id: 2, title: "Вступ до JavaScript", level: "початковий", hours: 30 },
    { id: 3, title: "Основи Git", level: "початковий", hours: 10 },
    { id: 4, title: "React для розробників", level: "середній", hours: 40 },
    { id: 5, title: "TypeScript на практиці", level: "середній", hours: 25 },
    { id: 6, title: "Next.js App Router", level: "середній", hours: 35 },
  ]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Каталог онлайн-курсів</h1>
        {/* Кількість рахується на сервері */}
        <p className={styles.total}>
          Усього курсів: <strong>{courses.length}</strong>
        </p>

        {/* Передаємо масив у Client Component через props */}
        <InteractiveList courses={courses} />
      </div>
    </main>
  );
}