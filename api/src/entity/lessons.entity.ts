import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lessons {
  @ApiProperty({ description: "Lesson id", nullable: false })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ description: "Lesson name", nullable: false })
  @Column({length: 100})
  name: string

  @ApiProperty({ description: "Lesson code", nullable: false })
  @Column({length: 20})
  code: string
}