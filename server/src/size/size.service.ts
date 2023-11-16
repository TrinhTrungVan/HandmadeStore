import {PrismaService} from 'src/prisma.service'
import {SizeDto} from './dto/size.dto'
import {Injectable} from '@nestjs/common'

@Injectable()
export class SizeService {
  constructor(private readonly prismaService: PrismaService) {}

  async getSizes(): Promise<any> {
    try {
      const sizes = await this.prismaService.size.findMany({})
      return sizes
    } catch (error) {
      console.log('[GET_SIZES]', error)
      return {
        error,
      }
    }
  }

  async getSize(sizeId: string): Promise<any> {
    try {
      if (!sizeId) {
        return {
          error: 'Size ID is required.',
        }
      }

      const size = await this.prismaService.size.findUnique({
        where: {
          id: sizeId,
        },
      })

      return size
    } catch (error) {
      console.log('[GET_SIZE]', error)
      return {
        error,
      }
    }
  }

  async createSize(data: SizeDto): Promise<any> {
    try {
      if (!data.name) {
        return {
          error: 'Size name is required.',
        }
      }

      const size = await this.prismaService.size.create({
        data: {
          name: data.name,
          value: data.value,
        },
      })

      return size
    } catch (error) {
      console.log('[CREATE_SIZE]', error)
      return {
        error,
      }
    }
  }

  async updateSize(sizeId: string, data: SizeDto): Promise<any> {
    try {
      if (!sizeId) {
        return {
          error: 'Size ID is required.',
        }
      }

      const size = await this.prismaService.size.update({
        where: {
          id: sizeId,
        },
        data: {
          name: data.name,
          value: data.value,
        },
      })

      return size
    } catch (error) {
      console.log('[UPDATE_SIZE]', error)
      return {
        error,
      }
    }
  }

  async deleteSize(sizeId: string): Promise<any> {
    try {
      if (!sizeId) {
        return {
          error: 'Size ID is required.',
        }
      }

      const size = await this.prismaService.size.delete({
        where: {
          id: sizeId,
        },
      })

      return size
    } catch (error) {
      console.log('[DELETE_SIZE]', error)
      return {
        error,
      }
    }
  }
}
