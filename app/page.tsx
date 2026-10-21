import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Ласкаво просимо!</h1>
      <div className="card">
        <p>Відкривай нові місця разом з нами. Обирай напрямок і вирушай у подорож!</p>
        <Link href="/destinations">
          <button>Переглянути напрямки</button>
        </Link>
      </div>
    </div>
  );
}
