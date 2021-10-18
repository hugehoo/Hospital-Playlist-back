import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from "./hospital/http-exception.filter"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('hospital');
  app.enableCors();
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
