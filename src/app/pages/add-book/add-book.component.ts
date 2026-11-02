import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Додати книгу</h2>

    <form #itemForm="ngForm" (ngSubmit)="addItem(itemForm)">

      <div>
        <label>Назва книги:</label><br>
        <input type="text" name="title" [(ngModel)]="book.title"
               #titleRef="ngModel" required minlength="2" maxlength="50">
        @if (submitted && titleRef.invalid) {
          <div>
            @if (titleRef.errors?.['required']) {
              <small style="color:red">Поле обов'язкове</small>
            }
            @if (titleRef.errors?.['minlength']) {
              <small style="color:red">Введено недостатньо символів (мінімум 2)</small>
            }
            @if (titleRef.errors?.['maxlength']) {
              <small style="color:red">Забагато символів (максимум 50)</small>
            }
          </div>
        }
      </div>
      <br>

      <div>
        <label>Автор:</label><br>
        <input type="text" name="author" [(ngModel)]="book.author"
               #authorRef="ngModel" required minlength="3" maxlength="50">
        @if (submitted && authorRef.invalid) {
          <div>
            @if (authorRef.errors?.['required']) {
              <small style="color:red">Поле обов'язкове</small>
            }
            @if (authorRef.errors?.['minlength']) {
              <small style="color:red">Введено недостатньо символів (мінімум 3)</small>
            }
            @if (authorRef.errors?.['maxlength']) {
              <small style="color:red">Забагато символів (максимум 50)</small>
            }
          </div>
        }
      </div>
      <br>

      <div>
        <label>Опис:</label><br>
        <textarea name="description" [(ngModel)]="book.description"
                  #descriptionRef="ngModel" required minlength="10"></textarea>
        @if (submitted && descriptionRef.invalid) {
          <div>
            @if (descriptionRef.errors?.['required']) {
              <small style="color:red">Поле обов'язкове</small>
            }
            @if (descriptionRef.errors?.['minlength']) {
              <small style="color:red">Введено недостатньо символів (мінімум 10)</small>
            }
          </div>
        }
      </div>
      <br>

      <button type="submit">Додати</button>
    </form>
  `
})
export class AddBookComponent {
  submitted = false;

  book = {
    title: '',
    author: '',
    description: ''
  };

  constructor(private bookService: BookService) {}

  addItem(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.bookService.addItem(this.book);

    form.resetForm();
    this.submitted = false;
  }
}