"use server";

import { z } from "zod";

// Схема перевірки для форми "Заявка до бібліотеки"
const schema = z.object({
  fullName: z.string().trim().min(2, "Мінімум 2 символи"),
  email: z.email("Некоректний email"),
  topic: z.enum(["Підручник", "Довідник", "Художня"], "Оберіть тип книги"),
  details: z.string().trim().min(5, "Мінімум 5 символів"),
});

export type FormState = {
  success: boolean;
  message: string;
  errors: {
    fullName?: string[];
    email?: string[];
    topic?: string[];
    details?: string[];
  };
};

export async function submitRequest(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  // Беремо значення з форми за атрибутом name
  const result = schema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    details: formData.get("details"),
  });

  // Якщо є помилки — повертаємо їх у форму
  if (!result.success) {
    return {
      success: false,
      message: "Виправте помилки у формі",
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  // Невелика затримка, щоб було видно "Надсилання..." на кнопці
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Дані лише перевіряємо, в базу не зберігаємо
  return {
    success: true,
    message: "Заявку на книгу перевірено!",
    errors: {},
  };
}