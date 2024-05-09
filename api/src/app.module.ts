import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module' 
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LessonsModule } from './lessons/lessons.module'

@Module({
  imports: [
    UsersModule,
    LessonsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'students',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}





