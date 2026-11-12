"use client"; // Client Component: тут можна використовувати useState

import { useState } from "react";

export default function Filter({ courses }: { courses: any[] }) {
  // query — те, що ввів користувач у поле пошуку
  const [query, setQuery] = useState("");

  // залишаємо тільки курси, у назві яких є введений текст
  const visible = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук курсу за назвою..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 8, width: "100%", marginBottom: 12 }}
      />

      <p>Знайдено курсів: {visible.length}</p>

      <ul>
        {visible.map((course) => (
          <li key={course.id} style={{ marginBottom: 12 }}>
            <b>{course.title}</b>
            <br />
            {course.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
