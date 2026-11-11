import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { Book, BookService } from '../../services/book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './books.html'
})
export class BooksComponent {
  books: Book[] = [];

  // Dependency Injection: Angular сам дає нам сервіс
  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }
}