import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as compression from 'compression';
import helmet from 'helmet';
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
  app.use(helmet());
  app.use(compression());

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(morgan('combined'));
  useSwagger(app);

  const port = process.env.PORT || 8000;
  await app.listen(port, () => {
    logger.log(`Server listening on port ${port}`);
  });
}
bootstrap();
