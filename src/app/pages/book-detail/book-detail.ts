import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Book, BookService } from '../../services/book';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './book-detail.html'
})
export class BookDetailComponent {
  id = 0;
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    // Беремо id з адреси (/book/:id) і шукаємо книгу в сервісі
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.book = this.bookService.getBookById(this.id);
    });
  }
}