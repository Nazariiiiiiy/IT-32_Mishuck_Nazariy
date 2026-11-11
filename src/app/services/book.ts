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
    {
      id: 1,
      title: '1984',
      author: 'Джордж Орвелл',
      description: 'Антиутопічний роман'
    },
    {
      id: 2,
      title: 'Кобзар',
      author: 'Тарас Шевченко',
      description: 'Збірка поезій відомого українського поета'
    },
    {
      id: 3,
      title: 'Гаррі Поттер',
      author: 'Джоан Роулінг',
      description: 'Фентезійний роман про юного чарівника'
    }
  ];

 
  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  addBook(book: { title: string; author: string; description: string }): void {
    let newId = 1;
    if (this.books.length > 0) {
      newId = this.books[this.books.length - 1].id + 1;
    }

    const newBook: Book = {
      id: newId,
      title: book.title,
      author: book.author,
      description: book.description
    };

    this.books.push(newBook);
  }
}