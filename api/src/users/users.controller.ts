import { Controller, Post, Get, Req, Res, HttpStatus, Query, Body, HttpCode, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './user.dto'
import { AuthGuard } from 'src/auth/auth.guard'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { Users } from 'src/entity/users.entity'



@Controller('/')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post('/user')
  @ApiOperation({ summary: "create user" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "Success", type: CreateUserDto})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
   async PostUser(@Body() User: CreateUserDto) {
    return this.UsersService.createUser(User)
  }

  @Get('/users')
  @ApiOperation({ summary: "get all users" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Users})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  getUsers(){
    return this.UsersService.getUsers()
  }

  
}
