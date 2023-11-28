import {JwtService} from '@nestjs/jwt'
import {PrismaService} from 'src/prisma.service'
import {UsersService} from 'src/users/users.service'
import {LoginUserDto} from './dto/login-user.dto'
import {Injectable, NotFoundException} from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import {RegisterUserDto} from './dto/register-user.dto'
import {Users} from 'src/users/users.model'

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<any> {
    const {username, password} = loginUserDto

    const user = await this.prismaService.user.findUnique({
      where: {
        username: username,
      },
    })

    if (!user) {
      throw new NotFoundException('User not found.')
    }

    const validatePassword = await bcrypt.compare(password, user.password)

    if (!validatePassword) {
      throw new NotFoundException('Invalid Password')
    }

    return {
      username: user.username,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      imageUrl: user.imageUrl,
      token: this.jwtService.sign({
        username: user.username,
      }),
    }
  }

  async register(registerUserDto: RegisterUserDto): Promise<any> {
    const newUser = new Users()
    newUser.username = registerUserDto.username
    newUser.email = registerUserDto.email
    newUser.phone = registerUserDto.phone
    newUser.imageUrl =
      'https://res.cloudinary.com/trungvan1904/image/upload/v1666843620/image/default_avatar_pzvbqf.jpg'
    newUser.isAdmin = false
    newUser.password = await bcrypt.hash(registerUserDto.password, 10)

    const user = await this.userService.createUser(newUser)

    return {
      username: user.username,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      imageUrl: user.imageUrl,
      token: this.jwtService.sign({
        username: user.username,
      }),
    }
  }
}
