import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: BookEntity[] = [];

  create(createBookDto: CreateBookDto) {
    const currentMaxId = this.books[this.books.length - 1]?.id || 0;
    
    const id = currentMaxId + 1;

    const books = {
      id,
      ...createBookDto,
    };

    this.books.push(books);
    return books;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const index = this.books.findIndex((book) => book.id === id);

    return this.books[index];
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const book = this.findOne(id);
    const newBook = {
      ...book,
      ...updateBookDto,
    };
    const index = this.books.findIndex((book) => book.id === id);

    this.books[index] = newBook;

    return newBook;

  }

  remove(id: number) {
    const index = this.books.findIndex((book) => book.id === id);

    if(index === -1) {
      throw new NotFoundException('Book with this id does not exists')
    }

    this.books.splice(index, 1);
    
    return `This action removes a #${id} book`;
  }
}
