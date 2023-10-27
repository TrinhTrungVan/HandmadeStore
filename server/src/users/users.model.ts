import {Prisma} from '@prisma/client'

export class Users implements Prisma.UserCreateInput {
  username: string
  password: string
  email: string
  phone: string
  imageUrl: string
  isAdmin?: boolean
}
