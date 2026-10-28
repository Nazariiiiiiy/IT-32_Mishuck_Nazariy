"use client"; // Ця директива робить компонент клієнтським: він працює в браузері
import { useState } from "react";
import styles from "./practice.module.css";

export type Course = {
  id: number;
  title: string;
  level: string;
  hours: number;
};

export default function InteractiveList({ courses }: { courses: Course[] }) {
 
  const [level, setLevel] = useState("all");
  
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  
  const shown = courses.filter(
    (course) => level === "all" || course.level === level
  );

 
  function toggleCourse(id: number) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div>
      <div className={styles.toolbar}>
        {/* Інтерактивна дія 1: фільтр за рівнем */}
        <label className={styles.filter}>
          Рівень:
          <select
            className={styles.select}
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="all">Усі</option>
            <option value="початковий">Початковий</option>
            <option value="середній">Середній</option>
          </select>
        </label>

        {/* Лічильник обраних курсів змінюється при натисканні «Обрати» */}
        <span className={styles.counter}>Обрано курсів: {selectedIds.length}</span>
      </div>

      {shown.length === 0 ? (
        <p className={styles.empty}>Нічого не знайдено</p>
      ) : (
        <ul className={styles.list}>
          {shown.map((course) => {
            const isSelected = selectedIds.includes(course.id);
            return (
              <li
                key={course.id}
                className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
              >
                <div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.meta}>
                    <span
                      className={`${styles.badge} ${
                        course.level === "початковий"
                          ? styles.beginner
                          : styles.intermediate
                      }`}
                    >
                      {course.level}
                    </span>
                    <span>{course.hours} год</span>
                  </div>
                </div>

                {/* Інтерактивна дія 2: кнопка «Обрати» біля кожного курсу */}
                <button
                  className={`${styles.button} ${isSelected ? styles.buttonSelected : ""}`}
                  onClick={() => toggleCourse(course.id)}
                >
                  {isSelected ? "Обрано ✓" : "Обрати"}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}