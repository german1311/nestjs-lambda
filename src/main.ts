import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const options = new DocumentBuilder()
    .setTitle('Nestjs Boilerplate')
    .setDescription('This is a project aimed to be a nestjs boilerplate')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(3000);
}
bootstrap();
