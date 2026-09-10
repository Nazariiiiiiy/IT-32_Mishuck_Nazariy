import { Injectable, signal } from '@angular/core';

export interface StudentModel {
  id: number;
  name: string;
  age: number;
  grade: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students = signal<StudentModel[]>([
    { id: 1, name: 'Анна', age: 18, grade: 11 },
    { id: 2, name: 'Максим', age: 17, grade: 8 },
    { id: 3, name: 'Олег', age: 18, grade: 6 }
  ]);

  getStudents() {
    return this.students;
  }

  addStudent(name: string, age: number, grade: number) {
    const newStudent: StudentModel = {
      id: Date.now(),
      name,
      age,
      grade
    };

    this.students.update(list => [...list, newStudent]);
  }

  removeStudent(id: number) {
    this.students.update(list => list.filter(s => s.id !== id));
  }
}