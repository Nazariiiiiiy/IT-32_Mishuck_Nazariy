"use server"; // ця функція виконується на сервері

export async function registerAction(prevState: any, formData: FormData): Promise<any> {
  // беремо значення з полів форми (за атрибутом name)
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const course = String(formData.get("course") || "").trim();

  // перевірка: поля не повинні бути порожніми
  if (name === "" || email === "" || course === "") {
    return { error: "Заповніть усі поля", name, email, course };
  }

  // перевірка: у email має бути @ і крапка
  if (!email.includes("@") || !email.includes(".")) {
    return { error: "Некоректний email", name, email, course };
  }

  // бази даних немає, тому просто повертаємо підтвердження
  return { success: `Дякуємо, ${name}! Ви записані на курс: ${course}` };
}
