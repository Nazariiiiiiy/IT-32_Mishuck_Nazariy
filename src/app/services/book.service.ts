import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: '1984', author: 'Джордж Орвелл', description: 'Антиутопічний роман' },
    { id: 2, title: 'Кобзар', author: 'Тарас Шевченко', description: 'Збірка поезій українського поета' },
    { id: 3, title: 'Мати', author: 'Максим Горький', description: 'Роман про робітничий рух' }
  ];

  getItems() {
    return this.books;
  }

  getItemById(id: number) {
    return this.books.find(book => book.id === id);
  }

  addItem(item: { title: string; author: string; description: string }) {
    let newId = 1;
    if (this.books.length > 0) {
      newId = this.books[this.books.length - 1].id + 1;
    }
    this.books.push({
      id: newId,
      title: item.title,
      author: item.author,
      description: item.description
    });
  }
}