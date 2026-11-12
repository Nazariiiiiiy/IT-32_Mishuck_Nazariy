"use client";

import { useActionState } from "react";
import { registerAction } from "../app/actions";

export default function RequestForm() {
  // state — те, що повернула Server Action (помилка або підтвердження)
  const [state, formAction] = useActionState(registerAction, {});

  return (
    <div>
      {state.success && <p style={{ color: "green" }}>{state.success}</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <form action={formAction} noValidate style={{ display: "grid", gap: 10, maxWidth: 400 }}>
        <label>
          Ім&apos;я
          <input type="text" name="name" defaultValue={state.name} style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          Email
          <input type="email" name="email" defaultValue={state.email} style={{ width: "100%", padding: 8 }} />
        </label>

        <label>
          Назва курсу
          <input type="text" name="course" defaultValue={state.course} style={{ width: "100%", padding: 8 }} />
        </label>

        <button type="submit" style={{ padding: 10 }}>Зареєструватись</button>
      </form>
    </div>
  );
}
