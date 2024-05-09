import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
  .setTitle('Lessons API')
  .setDescription('"yarn start" to run server')
  .setVersion('1.0')
  .addTag('lessons')
  .build()
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000)
}
bootstrap();
