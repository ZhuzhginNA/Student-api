import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Evaluations } from './evaluations.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 30})
  name: string

  @Column({length: 100})
  email: string

}