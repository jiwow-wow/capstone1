import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  // app.enableCors(); // ← 이 줄을 추가!
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(5000);
}
bootstrap();
