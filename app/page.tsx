import RequestForm from "./components/RequestForm";

export default function Home() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Заявка до бібліотеки</h1>
      <p>Заповніть форму, щоб замовити книгу в університетській бібліотеці.</p>
      <RequestForm />
    </main>
  );
}