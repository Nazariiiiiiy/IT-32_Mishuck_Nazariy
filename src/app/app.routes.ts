import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BooksComponent } from './pages/books/books';
import { AddBookComponent } from './pages/add-book/add-book';
import { BookDetailComponent } from './pages/book-detail/book-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  // 'books/add' стоїть до 'book/:id', щоб не було плутанини
  { path: 'books/add', component: AddBookComponent },
  { path: 'book/:id', component: BookDetailComponent }
];