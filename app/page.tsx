import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Онлайн-курси</h1>
      <p>Переглядайте курси в каталозі та реєструйтесь на обраний.</p>
      <Link href="/catalog">Перейти до каталогу</Link>
    </div>
  );
}
