import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LessonsController } from './lessons.controller'
import { LessonsService } from './lessons.service'
import { Lessons } from 'src/entity/lessons.entity'
import { Evaluations } from 'src/entity/evaluations.entity'
import { Users } from 'src/entity/users.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Lessons]), TypeOrmModule.forFeature([Evaluations]), TypeOrmModule.forFeature([Users])],
  providers: [LessonsService],
  controllers: [LessonsController],
})
export class LessonsModule {}