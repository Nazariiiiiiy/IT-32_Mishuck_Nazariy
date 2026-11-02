import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Онлайн-бібліотека</h1>
    <p>Ласкаво просимо! Перейдіть до списку книг або додайте нову.</p>
  `
})
export class HomeComponent {}