import Link from "next/link";

// Вкладений layout: діє тільки для сторінок усередині /destinations
export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="subnav">
        <Link href="/destinations">Усі напрямки</Link>
        <Link href="/destinations/ukraine">Україна</Link>
        <Link href="/destinations/europe">Європа</Link>
      </div>

      {children}
    </div>
  );
}
