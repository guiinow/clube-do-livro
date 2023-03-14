import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { databaseProviders } from '../db/db';
@Module({
  controllers: [BooksController],
  providers: [BooksService, ...databaseProviders],
})
export class BooksModule {}
