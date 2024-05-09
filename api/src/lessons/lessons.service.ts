import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Lessons } from 'src/entity/lessons.entity'
import { Evaluations } from 'src/entity/evaluations.entity'
import { Users } from 'src/entity/users.entity' 

    interface User {
    id: number;
    name: string;
    email: string;
  }
  
  interface Evaluation {
    id: string;
    score: string;
    user: User;
  }
  
  export type Lesson  = {
    id: number;
    name: string;
    code: string;
    evaluations: Evaluation[]
  }

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lessons)
    private lessonsRepository: Repository<Lessons>,

    @InjectRepository(Evaluations)
    private evaluationsRepository: Repository<Evaluations>,


    @InjectRepository(Users)
    private usersRepository: Repository<Evaluations>,
  ) {}

  async getLessons(): Promise<Lesson[]> {
    const lesson = await this.lessonsRepository.find()
    const temp = await Promise.all(lesson.map(async (lesson): Promise<any> => {
        const evaluations = await this.evaluationsRepository.find({where: {
            lessons: lesson
        },
            relations: ["users"]
        })

        const ans = evaluations.map((evaluation) => {

           return {
               id: evaluation.id,
               score: String(evaluation.score),
               user: evaluation.users
           }

        })

        return {...lesson, evaluations: ans}
    }))


    return temp

  }

  async createLessons(lesson): Promise<Lessons> {
    return this.lessonsRepository.save(lesson)
  }

  async getLesson(id): Promise<Lessons> {
    console.log(id)
    const lesson = await this.lessonsRepository.findOne({where: {
        id: id,
    }})
    return lesson
}

  async createEvaluations(evaluations, id): Promise<any> {

    const user = await this.usersRepository.findOne({where: {
        id: evaluations.user_id,
    }})

    const lesson = await this.lessonsRepository.findOne({where: {
        id: id,
    }})

    const temp = {
        score: evaluations.score,
        lessons: lesson,
        users: user,
    }

    const evaluation = this.evaluationsRepository.create(temp)
    this.evaluationsRepository.save(evaluation)
    const ans = {
        id: evaluation.lessons.id,
        user_id: evaluation.users.id,
        score: evaluation.score
    }

    return ans
  }
}
