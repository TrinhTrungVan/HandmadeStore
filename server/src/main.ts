import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {ValidationPipe} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const cors = {
    origin: ['http://localhost:3000'],
    methods: 'GET,PUT,PATCH,POST,DELETE,OPTIONS,HEAD',
  }
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )
  app.setGlobalPrefix('api')
  app.enableCors(cors)

  await app.listen(3001)
}
bootstrap()
