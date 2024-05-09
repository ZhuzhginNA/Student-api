import { Controller, Post, Get, Req, Res, HttpStatus, Query, Body, Param, HttpCode, UseGuards } from '@nestjs/common'
import { LessonsService } from './lessons.service' 
import { CreateUserDto } from 'src/users/user.dto'
import { CreateLessonsDto } from './lessons.dto'
import { AuthGuard } from 'src/auth/auth.guard'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { Lessons } from 'src/entity/lessons.entity'
import type { Lesson } from './lessons.service'



@Controller('/lessons')
export class LessonsController {
  constructor(private readonly LessonsService: LessonsService) {}

  @Post()
  @ApiOperation({ summary: "create lesson" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "Success", type: CreateLessonsDto})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
   async PostLesson(@Body() Lesson: CreateLessonsDto) {
    return this.LessonsService.createLessons(Lesson)
  }

  @Get()
  @ApiOperation({ summary: "get all lessons" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Lessons})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async getLessons(){
    return await this.LessonsService.getLessons()
  }

  @Get(':id')
  @ApiOperation({ summary: "get lesson by id" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Lessons})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  getLesson(@Param ('id') id: number) {
    return this.LessonsService.getLesson(id)
  }
  
  @Post(':id/evaluations')
  @ApiOperation({ summary: "create evaluations" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "Success", type: CreateLessonsDto })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  createEvaluations(@Param ('id') id: number, @Body() evaluations) {
    return this.LessonsService.createEvaluations(evaluations, id)
  }
}
