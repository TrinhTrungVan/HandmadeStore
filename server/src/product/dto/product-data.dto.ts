import {IsBoolean, IsNumber, IsString, IsArray} from 'class-validator'

export class ProductDataDto {
  @IsString()
  name: string

  @IsString()
  description: string

  @IsArray()
  images: string[]

  @IsNumber()
  price: number

  @IsNumber()
  inStock: number

  @IsString()
  categoryId: string

  @IsString()
  colorId: string

  @IsString()
  sizeId: string

  @IsBoolean()
  isFeatured: boolean

  @IsBoolean()
  isArchived: boolean
}
