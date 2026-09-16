import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail implements OnInit {

  books = [
    { id: 1, title: 'Кобзар', author: 'Тарас Шевченко', pages: 400 },
    { id: 2, title: '1984', author: 'Джордж Орвелл', pages: 320 },
    { id: 3, title: 'Гобіт', author: 'Дж. Р. Р. Толкін', pages: 300 }
  ];

  id!: number;
  book: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.book = this.books.find(b => b.id === this.id);
    });
  }
}