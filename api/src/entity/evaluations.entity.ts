import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { Users } from './users.entity';
import { Lessons } from './lessons.entity';

@Entity()
export class Evaluations {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  score: number

  @CreateDateColumn()
  created_at: Date

  @OneToOne(() => Users, users => users.id, {cascade: true})
  @JoinColumn()
  users: Users

  @OneToOne(() => Lessons, lessons => lessons.id,  {cascade: true})
  @JoinColumn()
  lessons: Lessons
}