import {PrismaService} from 'src/prisma.service'
import {ColorDto} from './dto/color.dto'
import {Injectable} from '@nestjs/common'

@Injectable()
export class ColorService {
  constructor(private readonly prismaService: PrismaService) {}

  async getColors(): Promise<any> {
    try {
      const colors = await this.prismaService.color.findMany({})
      return colors
    } catch (error) {
      console.log('[GET_COLORS]', error)
      return {
        error,
      }
    }
  }

  async getColor(colorId: string): Promise<any> {
    try {
      if (!colorId) {
        return {
          error: 'Color ID is required.',
        }
      }

      const color = await this.prismaService.color.findUnique({
        where: {
          id: colorId,
        },
      })

      return color
    } catch (error) {
      console.log('[GET_COLOR]', error)
      return {
        error,
      }
    }
  }

  async createColor(data: ColorDto): Promise<any> {
    try {
      if (!data.name) {
        return {
          error: 'Color name is required.',
        }
      }

      const color = await this.prismaService.color.create({
        data: {
          name: data.name,
          value: data.value,
        },
      })

      return color
    } catch (error) {
      console.log('[CREATE_COLOR]', error)
      return {
        error,
      }
    }
  }

  async updateColor(colorId: string, data: ColorDto): Promise<any> {
    try {
      if (!colorId) {
        return {
          error: 'Color ID is required.',
        }
      }

      const color = await this.prismaService.color.update({
        where: {
          id: colorId,
        },
        data: {
          name: data.name,
          value: data.value,
        },
      })

      return color
    } catch (error) {
      console.log('[UPDATE_COLOR]', error)
      return {
        error,
      }
    }
  }

  async deleteColor(colorId: string): Promise<any> {
    try {
      if (!colorId) {
        return {
          error: 'Color ID is required.',
        }
      }

      const color = await this.prismaService.color.delete({
        where: {
          id: colorId,
        },
      })

      return color
    } catch (error) {
      console.log('[DELETE_COLOR]', error)
      return {
        error,
      }
    }
  }
}
