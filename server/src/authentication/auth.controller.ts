import {AuthService} from './auth.service'
import {Body, Controller, Post, Req, Res} from '@nestjs/common'
import {Request, Response} from 'express'
import {LoginUserDto} from './dto/login-user.dto'
import {RegisterUserDto} from './dto/register-user.dto'

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Req() req: Request,
    @Res() res: Response,
    @Body() loginUserDto: LoginUserDto,
  ): Promise<any> {
    try {
      const result = await this.authService.login(loginUserDto)

      return res.status(200).json({
        status: 'OK',
        message: 'Login successfully!',
        result: result,
      })
    } catch (err) {
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Post('/register')
  async register(
    @Req() req: Request,
    @Res() res: Response,
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<any> {
    try {
      const result = await this.authService.register(registerUserDto)

      return res.status(200).json({
        status: 'OK',
        message: 'Register successfully!',
        result: result,
      })
    } catch (err) {
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }
}
