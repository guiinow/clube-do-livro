import { BuyService } from './modules/buy/buy.service';
import { BuyController } from './modules/buy/buy.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssociateController } from './modules/associate/associate.controller';
import { AssociateService } from './modules/associate/associate.service';
import {BooksController } from './modules/books/books.controller';
import { BooksService } from './modules/books/books.service';
import { BuyModule } from './modules/buy/buy.module';
import { LoanModule } from './modules/loan/loan.module';
import { LoanController } from './modules/loan/loan.controller';
import { LoanService } from './modules/loan/loan.service';

@Module({
  imports: [BuyModule, LoanModule],
  controllers: [AppController, AssociateController, BooksController, BuyController, LoanController],
  providers: [AppService, AssociateService, BooksService, BuyService, LoanService],
})
export class AppModule {}
