import {IsEmail, IsPhoneNumber, IsString, Length} from 'class-validator'

export class UpdateInfoDto {
  @IsString()
  @Length(5, 10)
  username: string

  @IsString()
  @Length(6, 12)
  password: string

  @IsEmail()
  email: string

  @IsPhoneNumber('VI')
  phone: string

  @IsString()
  imageUrl: string
}
