import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Список книг</h2>

    @for (book of books; track book.id) {
      <div>
        <h3>{{ book.title }}</h3>
        <p>{{ book.author }}</p>
        <a [routerLink]="['/book', book.id]">Детальніше</a>
      </div>
      <hr>
    }
  `
})
export class BooksComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getItems();
  }
}