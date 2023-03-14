import { Module } from '@nestjs/common';
import { BuyService } from './buy.service';
import { BuyController } from './buy.controller';
import { databaseProviders } from '../db/db';

@Module({
  controllers: [BuyController],
  providers: [BuyService, ...databaseProviders]
})
export class BuyModule {}
