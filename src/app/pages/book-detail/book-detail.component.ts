import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  template: `
    @if (book) {
      <h2>{{ book.title }}</h2>
      <p><b>Автор:</b> {{ book.author }}</p>
      <p><b>Опис:</b> {{ book.description }}</p>
    } @else {
      <h2>Книгу не знайдено</h2>
    }
  `
})
export class BookDetailComponent {
  id = 0;
  book: Book | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.book = this.bookService.getItemById(this.id);
    });
  }
}