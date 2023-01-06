import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssociateController } from './modules/associate/associate.controller';
import { AssociateService } from './modules/associate/associate.service';

@Module({
  imports: [],
  controllers: [AppController, AssociateController],
  providers: [AppService, AssociateService],
})
export class AppModule {}
