import { Controller, Post, Get, Req, Res, HttpStatus, Query, Body, Param } from '@nestjs/common'
import { LessonsService } from './lessons.service' 
import { CreateUserDto } from 'src/users/user.dto'
import { CreateLessonsDto } from './lessons.dto'




@Controller('/lessons')
export class LessonsController {
  constructor(private readonly LessonsService: LessonsService) {}

  @Post()
   async PostLesson(@Body() Lesson: CreateLessonsDto) {
    return this.LessonsService.createLessons(Lesson)
  }

  @Get()
  async getLessons(){
    return await this.LessonsService.getLessons()
  }

  @Get(':id')
  getLesson(@Param ('id') id: number) {
    return this.LessonsService.getLesson(id)
  }
  
  @Post(':id/evaluations')
  createEvaluations(@Param ('id') id: number, @Body() evaluations) {

    
    return this.LessonsService.createEvaluations(evaluations, id)
  }
}
