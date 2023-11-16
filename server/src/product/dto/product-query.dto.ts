import {IsBoolean, IsNumber, IsString, IsOptional} from 'class-validator'

export class ProductQueryDto {
  @IsString()
  @IsOptional()
  categoryId?: string

  @IsString()
  @IsOptional()
  colorId?: string

  @IsString()
  @IsOptional()
  sizeId?: string

  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean

  @IsString()
  @IsOptional()
  sortBy?: string

  @IsString()
  @IsOptional()
  name?: string

  @IsNumber()
  @IsOptional()
  page?: number
}
