//import { BuyService } from './modules/buy/buy.service';
//import { BuyController } from './modules/buy/buy.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { AssociateController } from './modules/associate/associate.controller';
//import { AssociateService } from './modules/associate/associate.service';
import { AssociateModule } from './modules/associate/associate.module';
//import { BooksController } from './modules/books/books.controller';
//import { BooksService } from './modules/books/books.service';
import { BooksModule } from './modules/books/books.module';
import { BuyModule } from './modules/buy/buy.module';
import { LoanModule } from './modules/loan/loan.module';
//import { LoanController } from './modules/loan/loan.controller';
//import { LoanService } from './modules/loan/loan.service';

@Module({
  imports: [BuyModule, LoanModule, AssociateModule, BooksModule],
  //imports: [AppModule,BuyModule, LoanModule, AssociateModule, BooksModule],
  controllers: [AppController],
  //providers: [AppService, AssociateService, BooksService, BuyService, LoanService],
  providers: [AppService],
  //providers: [AppService, AssociateService, BooksService, BuyService, LoanService],
})
export class AppModule {}
