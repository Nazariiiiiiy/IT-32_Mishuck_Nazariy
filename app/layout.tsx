import Link from "next/link";

export const metadata = {
  title: "Онлайн-курси",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body style={{ fontFamily: "Arial, sans-serif", maxWidth: 800, margin: "0 auto", padding: 20 }}>
        <nav style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <Link href="/">Головна</Link>
          <Link href="/catalog">Каталог</Link>
          <Link href="/form">Реєстрація</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
