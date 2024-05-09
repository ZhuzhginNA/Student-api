import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserDto {

  @ApiProperty({ description: "User name", nullable: false }) 
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ description: "User email", nullable: false }) 
  @IsEmail()
  @IsNotEmpty()
  email: string
}