import Link from "next/link";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Next.js 15: searchParams — це Promise, тому використовуємо await
export default async function EuropePage({
  searchParams,
}: {
  searchParams: Promise<{ test?: string }>;
}) {
  const params = await searchParams;

  await wait(2000);

  // Тестова помилка: відкрий /destinations/europe?test=error
  // Помилка виникає не завжди (50%), тож кнопка reset() може допомогти
  if (params.test === "error" && Math.random() < 0.5) {
    throw new Error("Тестова помилка: не вдалося завантажити Європу!");
  }

  return (
    <div>
      <h1>🇪🇺 Європа</h1>
      <div className="card">
        <h3>Париж</h3>
        <p>Ейфелева вежа, Лувр та круасани.</p>
      </div>
      <div className="card">
        <h3>Рим</h3>
        <p>Колізей, фонтани та італійська піца.</p>
      </div>
      <div className="card">
        <h3>Прага</h3>
        <p>Старе місто, Карлів міст та пиво.</p>
      </div>

      <Link href="/destinations/europe?test=error">
        <button>🧪 Протестувати помилку</button>
      </Link>
    </div>
  );
}
