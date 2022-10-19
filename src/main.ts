import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as morgan from 'morgan';
import { join } from 'path';
import { AppModule } from './app.module';
import { useSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const logger = new Logger();

  // middlewares
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.enableCors();

  // app.setGlobalPrefix('api');
  // app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(morgan('combined'));
  useSwagger(app);

  const port = 8000;
  await app.listen(port, () => {
    logger.log(`Server listening on port ${port}`);
  });
}
bootstrap();
