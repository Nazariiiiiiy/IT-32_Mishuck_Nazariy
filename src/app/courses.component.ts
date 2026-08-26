import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// ---- Дочірній компонент: картка курсу ----
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  template: `
    <div class="course-card">
      <h3>{{ courseName }}</h3>
      <p class="teacher">Викладач: {{ teacherName }}</p>
      <p class="duration">Тривалість: {{ duration }}</p>
      <button (click)="onEnrollClick()">Записатися</button>
    </div>
  `,
  styles: [`
    .course-card {
      background-color: white;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      padding: 24px;
      width: 240px;
      text-align: center;
      box-shadow: 0 3px 10px rgba(0,0,0,0.08);
    }
    .course-card h3 { margin: 0 0 12px; color: #2c3e50; }
    .teacher, .duration { color: #555; font-size: 14px; margin: 4px 0; }
    .course-card button {
      background-color: #27ae60;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 14px;
      font-weight: 600;
    }
    .course-card button:hover { background-color: #219150; }
  `]
})
export class CourseCardComponent {
  @Input() courseName!: string;
  @Input() teacherName!: string;
  @Input() duration: string = '20 годин';

  @Output() enroll = new EventEmitter<string>();

  onEnrollClick(): void {
    this.enroll.emit(this.courseName);
  }
}

// ---- Батьківський компонент: список курсів ----
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  template: `
    <section class="courses">
      <h2>Наші курси</h2>
      <div class="courses-list">
        <app-course-card
          *ngFor="let course of courses"
          [courseName]="course.name"
          [teacherName]="course.teacher"
          [duration]="course.duration"
          (enroll)="onCourseEnroll($event)">
        </app-course-card>
      </div>
    </section>
  `,
  styles: [`
    .courses { text-align: center; padding: 40px 20px; }
    .courses h2 { font-size: 26px; color: #2c3e50; margin-bottom: 30px; }
    .courses-list { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; }
  `]
})
export class CoursesComponent {
  courses = [
    { name: 'Angular', teacher: 'Іван Петренко', duration: '20 годин' },
    { name: 'JavaScript', teacher: 'Олена Коваль', duration: '15 годин' },
    { name: 'TypeScript', teacher: 'Андрій Сидоренко', duration: '10 годин' }
  ];

  @Output() enroll = new EventEmitter<string>();

  onCourseEnroll(courseName: string): void {
    this.enroll.emit(courseName);
  }
}
