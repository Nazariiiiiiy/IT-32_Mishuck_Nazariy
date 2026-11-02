import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { AddBookComponent } from './pages/add-book/add-book.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'book/:id', component: BookDetailComponent }
];