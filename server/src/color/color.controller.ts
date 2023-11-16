import {
  Controller,
  Get,
  Patch,
  Delete,
  Param,
  Req,
  Res,
  Body,
  Post,
} from '@nestjs/common'
import {ColorService} from './color.service'
import {Request, Response} from 'express'
import {ColorDto} from './dto/color.dto'

@Controller('/colors')
export class ColorController {
  constructor(private readonly colorServices: ColorService) {}

  @Get()
  async getColors(@Req() req: Request, @Res() res: Response): Promise<any> {
    try {
      const result = await this.colorServices.getColors()

      if (result.error) {
        return res.status(500).json({
          status: 'Fail',
          message: result.error,
        })
      }

      return res.status(200).json({
        status: 'OK',
        message: 'Query successfully!',
        result: result,
      })
    } catch (err) {
      console.log('GET_COLORS', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Get('/:id')
  async getColor(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const result = await this.colorServices.getColor(id)

      if (!result) {
        return res.status(500).json({
          status: 'Fail',
          message: 'Color not exist!',
        })
      }

      if (result.error) {
        return res.status(500).json({
          status: 'Fail',
          message: result.error,
        })
      }

      return res.status(200).json({
        status: 'OK',
        message: 'Query successfully!',
        result: result,
      })
    } catch (err) {
      console.log('GET_COLOR', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Post()
  async createColor(
    @Req() req: Request,
    @Res() res: Response,
    @Body() colorDto: ColorDto,
  ): Promise<any> {
    try {
      const result = await this.colorServices.createColor(colorDto)

      if (result.error) {
        return res.status(500).json({
          status: 'Fail',
          message: result.error,
        })
      }

      return res.status(200).json({
        status: 'OK',
        message: 'Create color successfully!',
        result: result,
      })
    } catch (err) {
      console.log('CREATE_COLOR', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Patch('/:id')
  async updateColor(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
    @Body() colorDto: ColorDto,
  ): Promise<any> {
    try {
      const result = await this.colorServices.updateColor(id, colorDto)

      if (!result) {
        return res.status(500).json({
          status: 'Fail',
          message: 'Color not exist!',
        })
      }

      if (result.error) {
        return res.status(500).json({
          status: 'Fail',
          message: result.error,
        })
      }

      return res.status(200).json({
        status: 'OK',
        message: 'Update color successfully!',
        result: result,
      })
    } catch (err) {
      console.log('UPDATE_COLOR', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Delete('/:id')
  async deleteColor(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const result = await this.colorServices.deleteColor(id)

      if (!result) {
        return res.status(500).json({
          status: 'Fail',
          message: 'Color not exist!',
        })
      }

      if (result.error) {
        return res.status(500).json({
          status: 'Fail',
          message: result.error,
        })
      }

      return res.status(200).json({
        status: 'OK',
        message: 'Delete color successfully!',
        result: result,
      })
    } catch (err) {
      console.log('DELETE_COLOR', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }
}
