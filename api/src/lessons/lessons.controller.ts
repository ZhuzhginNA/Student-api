import { Controller, Post, Get, Req, Res, HttpStatus, Query, Body, Param, HttpCode } from '@nestjs/common'
import { LessonsService } from './lessons.service' 
import { CreateUserDto } from 'src/users/user.dto'
import { CreateLessonsDto } from './lessons.dto'




@Controller('/lessons')
export class LessonsController {
  constructor(private readonly LessonsService: LessonsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
   async PostLesson(@Body() Lesson: CreateLessonsDto) {
    return this.LessonsService.createLessons(Lesson)
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getLessons(){
    return await this.LessonsService.getLessons()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getLesson(@Param ('id') id: number) {
    return this.LessonsService.getLesson(id)
  }
  
  @Post(':id/evaluations')
  @HttpCode(HttpStatus.CREATED)
  createEvaluations(@Param ('id') id: number, @Body() evaluations) {

    
    return this.LessonsService.createEvaluations(evaluations, id)
  }
}
