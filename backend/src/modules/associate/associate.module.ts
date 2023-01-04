import { Module } from '@nestjs/common';
import { AssociateService } from './associate.service';
import { AssociateController } from './associate.controller';

@Module({
  controllers: [AssociateController],
  providers: [AssociateService],
})
export class AssociateModule {}
