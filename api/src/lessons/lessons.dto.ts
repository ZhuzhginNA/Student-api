import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateLessonsDto {
  @ApiProperty({ description: "Lesson name", nullable: false })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ description: "Lesson code", nullable: false })
  @IsNotEmpty()
  @IsString()
  code: string
}