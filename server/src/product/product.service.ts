import {PrismaService} from 'src/prisma.service'
import {ProductQueryDto} from './dto/product-query.dto'
import {Injectable} from '@nestjs/common'
import {ProductDataDto} from './dto/product-data.dto'

const PRODUCTS_BATCH = 10

const sortMap: any = {
  createdAtDesc: {
    createdAt: 'desc',
  },
  createdAtAsc: {
    createdAt: 'asc',
  },
  priceAsc: {
    price: 'asc',
  },
  priceDesc: {
    price: 'desc',
  },
}

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProducts(query: ProductQueryDto): Promise<any> {
    try {
      const {
        categoryId,
        colorId,
        isFeatured,
        name,
        sizeId,
        sortBy = 'createdAtDesc',
        page = 0,
      } = query

      const productQuery: any = {}

      if (name) {
        productQuery.name = {
          contains: name,
          mode: 'insensitive',
        }
      }

      if (categoryId) {
        productQuery.categoryId = categoryId
      }

      if (colorId) {
        productQuery.colorId = colorId
      }

      if (isFeatured) {
        productQuery.isFeatured = isFeatured
      }

      if (sizeId) {
        productQuery.sizeId = sizeId
      }

      const products = await this.prismaService.product.findMany({
        skip: PRODUCTS_BATCH * page,
        take: PRODUCTS_BATCH,
        where: productQuery,
        include: {
          category: true,
          size: true,
          color: true,
        },
        orderBy: sortMap[sortBy],
      })

      return products
    } catch (error) {
      console.log('[GET_PRODUCTS]', error)
      return {
        error,
      }
    }
  }

  async getProductDetails(productId: string): Promise<any> {
    try {
      if (!productId) {
        return {
          error: 'ProductId is required.',
        }
      }

      const product = await this.prismaService.product.findUnique({
        where: {
          id: productId,
        },
        include: {
          category: true,
          size: true,
          color: true,
        },
      })

      return product
    } catch (error) {
      // console.log('[GET_PRODUCT]', error)
      return {
        error,
      }
    }
  }

  async createProduct(data: ProductDataDto): Promise<any> {
    try {
      const product = await this.prismaService.product.create({
        data: data,
      })

      return product
    } catch (error) {
      console.log('[CREATE_PRODUCT]', error)
      return {
        error,
      }
    }
  }

  async updateProduct(productId: string, data: ProductDataDto): Promise<any> {
    try {
      const product = await this.prismaService.product.update({
        where: {
          id: productId,
        },
        data: data,
      })

      return product
    } catch (error) {
      console.log('[UPDATE_PRODUCT]', error)
      return {
        error,
      }
    }
  }

  async deleteProduct(productId: string): Promise<any> {
    try {
      const product = await this.prismaService.product.delete({
        where: {
          id: productId,
        },
      })

      return product
    } catch (error) {
      console.log('[DELETE_PRODUCT]', error)
      return {
        error,
      }
    }
  }
}
