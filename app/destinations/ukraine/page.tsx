function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function UkrainePage() {
  await wait(2000);

  return (
    <div>
      <h1>🇺🇦 Україна</h1>
      <div className="card">
        <h3>Карпати</h3>
        <p>Гори, свіже повітря та чудові маршрути.</p>
      </div>
      <div className="card">
        <h3>Львів</h3>
        <p>Місто кави, архітектури та затишних вуличок.</p>
      </div>
      <div className="card">
        <h3>Одеса</h3>
        <p>Море, пляжі та неповторна атмосфера.</p>
      </div>
    </div>
  );
}
