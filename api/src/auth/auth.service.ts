import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { Users } from '../entity/users.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async signIn(
    username: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersRepository.findOne({ where: { name:username } });
    if (!user) {
      throw new UnauthorizedException()
    }
    const payload = { sub: user.id, username: user.name }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}