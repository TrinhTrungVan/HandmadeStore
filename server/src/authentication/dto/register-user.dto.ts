import {IsEmail, IsPhoneNumber, IsString, Length} from 'class-validator'

export class RegisterUserDto {
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
}
