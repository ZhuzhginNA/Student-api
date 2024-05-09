import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Evaluations } from './evaluations.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Users {
  @ApiProperty({ description: "User id", nullable: false })
  @PrimaryGeneratedColumn()
  id: number
  
  @ApiProperty({ description: "User name", nullable: false })
  @Column({length: 30})
  name: string

  @ApiProperty({ description: "User email", nullable: false })
  @Column({length: 100})
  email: string

}