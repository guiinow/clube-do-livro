import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssociateModule } from './modules/associate/associate.module';
import { AssociateService } from './modules/associate/associate.service';
import { BooksModule } from './modules/books/books.module';
import { BooksService } from './modules/books/books.service';
import { BuyModule } from './modules/buy/buy.module';
import { BuyService } from './modules/buy/buy.service';
import { databaseProviders } from './modules/db/db';
import { LoanModule } from './modules/loan/loan.module';
import { LoanService } from './modules/loan/loan.service';

@Module({
  imports: [AppModule, BuyModule, LoanModule, AssociateModule, BooksModule],
  controllers: [AppController],
  providers: [
    AppService,
    AssociateService,
    BooksService,
    BuyService,
    LoanService,
    ...databaseProviders,
  ],
})
export class AppModule {}
