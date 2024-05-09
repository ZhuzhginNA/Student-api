import { Controller, Post, Get, Req, Res, HttpStatus, Query, Body, HttpCode, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './user.dto'
import { AuthGuard } from 'src/auth/auth.guard'



@Controller('/')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post('/user')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
   async PostUser(@Body() User: CreateUserDto) {
    return this.UsersService.createUser(User)
  }

  @Get('/users')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  getUsers(){
    return this.UsersService.getUsers()
  }

  
}
