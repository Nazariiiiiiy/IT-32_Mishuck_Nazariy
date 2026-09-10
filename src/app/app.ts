import { Component } from '@angular/core';
import { Students } from './students/students';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Students],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'students-app';
}