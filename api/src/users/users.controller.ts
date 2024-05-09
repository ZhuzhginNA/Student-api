import { Controller, Post, Get, Req, Res, HttpStatus, Query, Body } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './user.dto'



@Controller('/')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post('/user')
   async PostUser(@Body() User: CreateUserDto) {
    return this.UsersService.createUser(User)
  }

  @Get('/users')
  getUsers(){
    return this.UsersService.getUsers()
  }

  
}
