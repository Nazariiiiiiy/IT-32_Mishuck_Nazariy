import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-book.html'
})
export class AddBookComponent {
  // Поля форми
  title = '';
  author = '';
  description = '';

  // Помилки показуємо тільки після спроби відправити форму
  submitted = false;

  constructor(private bookService: BookService) {}

  addBook(form: NgForm) {
    this.submitted = true;

    // Якщо є помилки - не додаємо книгу
    if (form.invalid) {
      return;
    }

    // форма -> компонент -> сервіс -> новий об'єкт у масиві
    this.bookService.addBook({
      title: this.title,
      author: this.author,
      description: this.description
    });

    form.resetForm();
    this.submitted = false;
  }
}