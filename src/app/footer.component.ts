import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <p>&copy; 2026 EduPlatform. Усі права захищені.</p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      background-color: #2c3e50;
      color: #ccc;
      padding: 16px;
      font-size: 14px;
    }
  `]
})
export class FooterComponent {}
