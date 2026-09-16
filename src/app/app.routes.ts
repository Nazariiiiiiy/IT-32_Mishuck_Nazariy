import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Books } from './pages/books/books';
import { BookDetail } from './pages/book-detail/book-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'books', component: Books },
  { path: 'book/:id', component: BookDetail }
];