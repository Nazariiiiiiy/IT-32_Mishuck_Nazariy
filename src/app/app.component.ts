import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CoursesComponent } from './courses.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CoursesComponent, FooterComponent],
  template: `
    <app-header [platformName]="platformName"></app-header>

    <main class="page-content">
      <app-courses (enroll)="onEnroll($event)"></app-courses>
      <p *ngIf="enrollMessage" class="enroll-message">{{ enrollMessage }}</p>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    .page-content { min-height: 60vh; background-color: #f5f7fa; padding-bottom: 20px; }
    .enroll-message {
      text-align: center;
      color: #27ae60;
      font-weight: 600;
      background-color: #eafaf1;
      border: 1px solid #27ae60;
      border-radius: 6px;
      max-width: 400px;
      margin: 0 auto;
      padding: 12px;
    }
  `]
})
export class AppComponent {
  platformName = 'EduPlatform';
  enrollMessage = '';

  onEnroll(courseName: string): void {
    this.enrollMessage = `Ви записалися на курс "${courseName}"`;
  }
}
