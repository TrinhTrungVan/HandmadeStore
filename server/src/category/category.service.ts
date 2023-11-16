import {PrismaService} from 'src/prisma.service'
import {CategoryDto} from './dto/category.dto'
import {Injectable} from '@nestjs/common'

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCategories(): Promise<any> {
    try {
      const categories = await this.prismaService.category.findMany({})
      return categories
    } catch (error) {
      console.log('[GET_CATEGORIES]', error)
      return {
        error,
      }
    }
  }

  async getCategory(categoryId: string): Promise<any> {
    try {
      if (!categoryId) {
        return {
          error: 'Category ID is required.',
        }
      }

      const category = await this.prismaService.category.findUnique({
        where: {
          id: categoryId,
        },
      })

      return category
    } catch (error) {
      console.log('[GET_CATEGORY]', error)
      return {
        error,
      }
    }
  }

  async createCategory(data: CategoryDto): Promise<any> {
    try {
      if (!data.name) {
        return {
          error: 'Category name is required.',
        }
      }

      const category = await this.prismaService.category.create({
        data: {
          name: data.name,
        },
      })

      return category
    } catch (error) {
      console.log('[CREATE_CATEGORY]', error)
      return {
        error,
      }
    }
  }

  async updateCategory(categoryId: string, data: CategoryDto): Promise<any> {
    try {
      if (!categoryId) {
        return {
          error: 'Category ID is required.',
        }
      }

      const category = await this.prismaService.category.update({
        where: {
          id: categoryId,
        },
        data: {
          name: data.name,
        },
      })

      return category
    } catch (error) {
      console.log('[UPDATE_CATEGORY]', error)
      return {
        error,
      }
    }
  }

  async deleteCategory(categoryId: string): Promise<any> {
    try {
      if (!categoryId) {
        return {
          error: 'Category ID is required.',
        }
      }

      const category = await this.prismaService.category.delete({
        where: {
          id: categoryId,
        },
      })

      return category
    } catch (error) {
      console.log('[DELETE_CATEGORY]', error)
      return {
        error,
      }
    }
  }
}
