import { Controller, Post, Get, Req, Res, HttpStatus, Query, Body, Param, HttpCode, UseGuards } from '@nestjs/common'
import { LessonsService } from './lessons.service' 
import { CreateUserDto } from 'src/users/user.dto'
import { CreateLessonsDto } from './lessons.dto'
import { AuthGuard } from 'src/auth/auth.guard'




@Controller('/lessons')
export class LessonsController {
  constructor(private readonly LessonsService: LessonsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
   async PostLesson(@Body() Lesson: CreateLessonsDto) {
    return this.LessonsService.createLessons(Lesson)
  }

  @Get()
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async getLessons(){
    return await this.LessonsService.getLessons()
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  getLesson(@Param ('id') id: number) {
    return this.LessonsService.getLesson(id)
  }
  
  @Post(':id/evaluations')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  createEvaluations(@Param ('id') id: number, @Body() evaluations) {

    
    return this.LessonsService.createEvaluations(evaluations, id)
  }
}
