import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { databaseProviders } from '../db/db';
@Module({
  controllers: [LoanController],
  providers: [LoanService, ...databaseProviders]
})
export class LoanModule {}
