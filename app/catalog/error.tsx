"use client"; // error.tsx завжди Client Component

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Помилка</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Спробувати ще раз</button>
    </div>
  );
}
