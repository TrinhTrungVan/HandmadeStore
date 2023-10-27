import {PrismaService} from 'src/prisma.service'
import {Users} from './users.model'
import {Injectable, ConflictException} from '@nestjs/common'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<Users[]> {
    return this.prisma.user.findMany()
  }

  async createUser(data: Users): Promise<Users> {
    const existing = await this.prisma.user.findUnique({
      where: {
        username: data.username,
      },
    })

    if (existing) {
      throw new ConflictException('username already exists')
    }

    const newUser = await this.prisma.user.create({
      data,
    })

    return newUser
  }
}
