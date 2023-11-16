import {
  Controller,
  Get,
  Patch,
  Delete,
  Post,
  Body,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common'
import {ProductService} from './product.service'
import {Request, Response} from 'express'
import {ProductQueryDto} from './dto/product-query.dto'
import {ProductDataDto} from './dto/product-data.dto'

@Controller('/products')
export class ProductController {
  constructor(private readonly productServices: ProductService) {}

  @Get()
  async getProducts(
    @Req() req: Request,
    @Res() res: Response,
    @Query() productQuery: ProductQueryDto,
  ): Promise<any> {
    try {
      const result = await this.productServices.getProducts(productQuery)

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
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Get('/:id')
  async getProductDetails(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const result = await this.productServices.getProductDetails(id)

      if (!result) {
        return res.status(500).json({
          status: 'Fail',
          message: 'Product not exist!',
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
      console.log('GET_PRODUCT', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Post()
  async createProduct(
    @Req() req: Request,
    @Res() res: Response,
    @Body() productDataDto: ProductDataDto,
  ): Promise<any> {
    try {
      const result = await this.productServices.createProduct(productDataDto)

      if (!result) {
        return res.status(500).json({
          status: 'Fail',
          message: 'Create product fail!',
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
        message: 'Create product successfully!',
        result: result,
      })
    } catch (err) {
      console.log('CREATE_PRODUCT', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Patch('/:id')
  async updateProduct(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
    @Body() productDataDto: ProductDataDto,
  ): Promise<any> {
    try {
      const result = await this.productServices.updateProduct(
        id,
        productDataDto,
      )

      if (!result) {
        return res.status(500).json({
          status: 'Fail',
          message: 'Update product fail!',
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
        message: 'Update product successfully!',
        result: result,
      })
    } catch (err) {
      console.log('UPDATE_PRODUCT', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }

  @Delete('/:id')
  async deleteProduct(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const result = await this.productServices.deleteProduct(id)

      if (result.error) {
        return res.status(500).json({
          status: 'Fail',
          message: result.error,
        })
      }

      return res.status(200).json({
        status: 'OK',
        message: 'Delete product successfully!',
        result: result,
      })
    } catch (err) {
      console.log('DELETE_PRODUCT', err)
      return res.status(500).json({
        status: 'Fail',
        message: 'Internal Server Error',
      })
    }
  }
}
