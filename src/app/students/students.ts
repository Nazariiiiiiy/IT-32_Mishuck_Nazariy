import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student'

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {

  // Dependency Injection — сервіс підключається сюди, БЕЗ "new"
  constructor(private studentService: StudentService) {}

  // геттер, щоб у HTML можна було просто писати students
  get students() {
    return this.studentService.getStudents()();
  }

  newName: string = '';
  newAge: number | null = null;
  newGrade: number | null = null;

  get isAddDisabled(): boolean {
    return !this.newName || this.newName.trim().length === 0;
  }

  addStudent(): void {
    if (this.isAddDisabled) {
      return;
    }

    this.studentService.addStudent(
      this.newName.trim(),
      this.newAge ?? 0,
      this.newGrade ?? 0
    );

    this.clearForm();
  }

  clearForm(): void {
    this.newName = '';
    this.newAge = null;
    this.newGrade = null;
  }

  removeStudent(id: number): void {
    this.studentService.removeStudent(id);
  }

  getGradeClass(grade: number | null): string {
    if (grade === null) return '';
    if (grade >= 10 && grade <= 12) return 'high-result';
    if (grade >= 7 && grade <= 9) return 'medium-result';
    if (grade >= 1 && grade <= 6) return 'low-result';
    return '';
  }
}