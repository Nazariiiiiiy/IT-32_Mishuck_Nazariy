import Link from "next/link";

// Штучна затримка 2 секунди, щоб було видно loading.tsx
function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function DestinationsPage() {
  await wait(2000);

  return (
    <div>
      <h1>Напрямки</h1>
      <div className="card">
        <h2>🇺🇦 Україна</h2>
        <p>Карпати, Одеса, Львів та багато іншого.</p>
        <Link href="/destinations/ukraine">Детальніше →</Link>
      </div>
      <div className="card">
        <h2>🇪🇺 Європа</h2>
        <p>Париж, Рим, Прага та інші чудові міста.</p>
        <Link href="/destinations/europe">Детальніше →</Link>
      </div>
    </div>
  );
}
