"use client";

import { useActionState } from "react";
import { submitRequest, type FormState } from "../actions";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

export default function RequestForm() {
  const [state, formAction, isPending] = useActionState(
    submitRequest,
    initialState
  );

  return (
    <form
      action={formAction}
      noValidate
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        maxWidth: "400px",
      }}
    >
      <label htmlFor="fullName">Ім&apos;я читача</label>
      <input id="fullName" name="fullName" type="text" />
      {state.errors.fullName && (
        <p style={{ color: "red" }}>{state.errors.fullName[0]}</p>
      )}

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" />
      {state.errors.email && (
        <p style={{ color: "red" }}>{state.errors.email[0]}</p>
      )}

      <label htmlFor="topic">Тип книги</label>
      <select id="topic" name="topic" defaultValue="">
        <option value="">-- Оберіть тип --</option>
        <option value="Підручник">Підручник</option>
        <option value="Довідник">Довідник</option>
        <option value="Художня">Художня</option>
      </select>
      {state.errors.topic && (
        <p style={{ color: "red" }}>{state.errors.topic[0]}</p>
      )}

      <label htmlFor="details">Назва потрібної книги</label>
      <textarea id="details" name="details" rows={4} />
      {state.errors.details && (
        <p style={{ color: "red" }}>{state.errors.details[0]}</p>
      )}

      <button type="submit" disabled={isPending}>
        {isPending ? "Надсилання..." : "Надіслати"}
      </button>

      <p
        aria-live="polite"
        style={{ color: state.success ? "green" : "red" }}
      >
        {state.message}
      </p>
      {state.success && <p style={{ color: "green" }}>Дані успішно перевірено</p>}
    </form>
  );
}