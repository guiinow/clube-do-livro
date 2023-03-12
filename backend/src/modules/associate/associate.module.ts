import { Module } from '@nestjs/common';
import { AssociateService } from './associate.service';
import { AssociateController } from './associate.controller';
import { databaseProviders } from '../db/db';

@Module({
  controllers: [AssociateController],
  providers: [AssociateService, ...databaseProviders],
})
export class AssociateModule {}
