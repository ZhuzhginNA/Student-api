import { IsString, IsNotEmpty } from 'class-validator'

export class CreateLessonsDto {
  @IsString()
  @IsNotEmpty()
  name: string

  
  @IsNotEmpty()
  @IsString()
  code: string
}