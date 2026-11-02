import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Головна</a> |
      <a routerLink="/books">Книги</a> |
      <a routerLink="/books/add">Додати книгу</a>
    </nav>

    <hr>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}