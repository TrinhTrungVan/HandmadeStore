import {UsersService} from './users.service'
import {Req, Res, Controller, Get} from '@nestjs/common'
import {Request, Response} from 'express'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(@Req() req: Request, @Res() res: Response): Promise<any> {
    try {
      const result = await this.usersService.getAllUsers()

      return res.status(200).json({
        status: 'OK',
        message: 'Get all users successfully!',
        result: result,
      })
    } catch (e) {
      return res.status(500).json({
        status: 'Fail',
        message: 'Get all users failure!',
      })
    }
  }
}
