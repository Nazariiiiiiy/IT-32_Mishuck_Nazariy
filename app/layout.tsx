import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Туристичний портал",
  description: "Практична робота: Next.js App Router",
};

// Головний layout: шапка + меню + підвал (однакові для всіх сторінок)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <header>
          <div className="logo">🌍 Туристичний портал</div>
          <nav>
            <Link href="/">Головна</Link>
            <Link href="/destinations">Напрямки</Link>
            <Link href="/contacts">Контакти</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>© 2026 Туристичний портал</footer>
      </body>
    </html>
  );
}
