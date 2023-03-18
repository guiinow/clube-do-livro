import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';



async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000, '0.0.0.0');

  // Pipes 
  app.useGlobalPipes(
    new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }),
  );

  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
