import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lessons {
  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 100})
  name: string

  @Column({length: 20})
  code: string
}