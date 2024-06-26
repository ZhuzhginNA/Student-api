import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from 'src/entity/users.entity'


@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      global: true,
      secret: "secret",
      signOptions: { expiresIn: '180s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}