import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h1>{{ platformName }}</h1>
      <nav class="menu">
        <a href="#">Курси</a>
        <a href="#">Викладачі</a>
        <a href="#">Контакти</a>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(90deg, #2c3e50, #34495e);
      color: white;
      padding: 16px 40px;
    }
    .menu { display: flex; gap: 24px; }
    .menu a { color: white; text-decoration: none; font-weight: 500; }
    .menu a:hover { text-decoration: underline; }
  `]
})
export class HeaderComponent {
  @Input() platformName!: string;
}
