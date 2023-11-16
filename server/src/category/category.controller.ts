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
import {CategoryService} from './category.service'
import {Request, Response} from 'express'
import {CategoryDto} from './dto/category.dto'

@Controller('/categories')
export class CategoryController {
  constructor(private readonly categoryServices: CategoryService) {}

  @Get()
  async getCategories(@Req() req: Request, @Res() res: Response): Promise<any> {
    try {
      const result = await this.categoryServices.getCategories()

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
      const result = await this.categoryServices.getCategory(id)

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
    @Body() categoryDto: CategoryDto,
  ): Promise<any> {
    try {
      const result = await this.categoryServices.createCategory(categoryDto)

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
    @Body() categoryDto: CategoryDto,
  ): Promise<any> {
    try {
      const result = await this.categoryServices.updateCategory(id, categoryDto)

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
      const result = await this.categoryServices.deleteCategory(id)

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
