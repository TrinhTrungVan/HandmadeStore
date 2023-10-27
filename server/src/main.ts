import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const cors = {
    origin: ['http://localhost:3000/'],
    methods: 'GET,PUT,PATCH,POST,DELETE,OPTIONS,HEAD',
  }

  app.setGlobalPrefix('api')
  app.enableCors(cors)

  await app.listen(3001)
}
bootstrap()
