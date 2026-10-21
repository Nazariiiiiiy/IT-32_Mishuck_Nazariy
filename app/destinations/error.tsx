"use client"; // error.tsx завжди має бути клієнтським компонентом

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="card">
      <h2>😕 Сталася помилка</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Спробувати ще раз</button>
    </div>
  );
}
