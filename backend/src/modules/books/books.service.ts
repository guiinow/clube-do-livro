import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@Inject('DATABASE_CONNECTION') private readonly connection: any) {}
  
  private books: BookEntity[] = [];
 
  async create(createBookDto: CreateBookDto): Promise<any> {
    const result = await this.connection
      .query('INSERT INTO book (id, buyinfo, title, author, description,publisher, cover) VALUES ($1, $2, $3, $4, $5, $6, $7)', [
        createBookDto.id,
        createBookDto.buyinfo,
        createBookDto.title,
        createBookDto.author,
        createBookDto.description,
        createBookDto.publisher,
        createBookDto.cover,
      ])
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });

    return result;
  }

  async findAll() {
    const result = await this.connection
    .query(`SELECT * FROM book`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

    return result.rows;
  }

  async findOne(id: number) {
    const result = await this.connection
    .query(`SELECT * FROM book WHERE id = $1`, [id])
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

    return result.rows;
  }

  async update (id: number, updateBookDto: UpdateBookDto): Promise<any> {
    const result = await this.connection
    .query(`UPDATE book SET buyinfo = $1, title = $2, author = $3, description = $4, publisher = $5, cover = $6 WHERE id = $7`, [
      updateBookDto.buyinfo,
      updateBookDto.title,
      updateBookDto.author,
      updateBookDto.description,
      updateBookDto.publisher,
      updateBookDto.cover,
      id,
    ])
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

    return result;
  }

  
  async remove(id: number): Promise<any> {
    const result = await this.connection
    .query(`DELETE FROM book WHERE id = $1`, [id])
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

    return result;
  }
}



  
