import Filter from "../../components/Filter";

// Server Component: код виконується на сервері, тому можна писати async/await
export default async function CatalogPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  // Якщо сервер відповів помилкою — кидаємо помилку, її покаже error.tsx
  if (!response.ok) {
    throw new Error("Не вдалося завантажити курси");
  }

  const posts = await response.json();
  const courses = posts.slice(0, 20); // беремо перші 20 «курсів»

  return (
    <div>
      <h1>Каталог курсів</h1>
      {/* передаємо дані в Client Component через props */}
      <Filter courses={courses} />
    </div>
  );
}
