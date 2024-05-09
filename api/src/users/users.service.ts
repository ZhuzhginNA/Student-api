import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Users } from '../entity/users.entity' 

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getUsers(): Promise<Users[]> {
    return this.usersRepository.find()

  }

  async createUser(user): Promise<Users> {
    return this.usersRepository.save(user)
  }
}