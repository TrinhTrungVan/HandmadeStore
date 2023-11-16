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
import {SizeService} from './size.service'
import {Request, Response} from 'express'
import {SizeDto} from './dto/size.dto'

@Controller('/sizes')
export class SizeController {
  constructor(private readonly sizeServices: SizeService) {}

  @Get()
  async getCategories(@Req() req: Request, @Res() res: Response): Promise<any> {
    try {
      const result = await this.sizeServices.getSizes()

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
      console.log('GET_CATEGORIES', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Get('/:id')
  async getCategory(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const result = await this.sizeServices.getSize(id)

      if (!result) {
        return res.status(500).json({
          status: 'Fail',
          message: 'Category not exist!',
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
      console.log('GET_CATEGORY', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Post()
  async createCategory(
    @Req() req: Request,
    @Res() res: Response,
    @Body() sizeDto: SizeDto,
  ): Promise<any> {
    try {
      const result = await this.sizeServices.createSize(sizeDto)

      if (result.error) {
        return res.status(500).json({
          status: 'Fail',
          message: result.error,
        })
      }

      return res.status(200).json({
        status: 'OK',
        message: 'Create category successfully!',
        result: result,
      })
    } catch (err) {
      console.log('CREATE_CATEGORY', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Patch('/:id')
  async updateCategory(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
    @Body() sizeDto: SizeDto,
  ): Promise<any> {
    try {
      const result = await this.sizeServices.updateSize(id, sizeDto)

      if (!result) {
        return res.status(500).json({
          status: 'Fail',
          message: 'Category not exist!',
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
        message: 'Update category successfully!',
        result: result,
      })
    } catch (err) {
      console.log('UPDATE_CATEGORY', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Delete('/:id')
  async deleteCategory(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const result = await this.sizeServices.deleteSize(id)

      if (!result) {
        return res.status(500).json({
          status: 'Fail',
          message: 'Category not exist!',
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
        message: 'Delete category successfully!',
        result: result,
      })
    } catch (err) {
      console.log('DELETE_CATEGORY', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }
}
