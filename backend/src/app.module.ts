import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssociateController } from './modules/associate/associate.controller';
import { AssociateService } from './modules/associate/associate.service';
import {BooksController } from './modules/books/books.controller';
import { BooksService } from './modules/books/books.service';

@Module({
  imports: [],
  controllers: [AppController, AssociateController, BooksController],
  providers: [AppService, AssociateService, BooksService],
})
export class AppModule {}
