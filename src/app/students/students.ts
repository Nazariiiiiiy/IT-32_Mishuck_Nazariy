import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  age: number | null;
  grade: number | null;
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {
  students: Student[] = [
    { name: 'Анна', age: 18, grade: 11 },
    { name: 'Максим', age: 17, grade: 7 },
    { name: 'Олег', age: 18, grade: 5 }
  ];

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
    this.students.push({
      name: this.newName.trim(),
      age: this.newAge,
      grade: this.newGrade
    });
    this.clearForm();
  }

  clearForm(): void {
    this.newName = '';
    this.newAge = null;
    this.newGrade = null;
  }

  removeStudent(index: number): void {
    this.students.splice(index, 1);
  }

  getGradeClass(grade: number | null): string {
    if (grade === null) return '';
    if (grade >= 10 && grade <= 12) return 'high-result';
    if (grade >= 7 && grade <= 9) return 'medium-result';
    if (grade >= 1 && grade <= 6) return 'low-result';
    return '';
  }
}