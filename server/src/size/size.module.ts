import {Module} from '@nestjs/common'
import {PrismaService} from 'src/prisma.service'
import {SizeController} from './size.controller'
import {SizeService} from './size.service'

@Module({
  controllers: [SizeController],
  providers: [PrismaService, SizeService],
})
export class SizeModule {}
