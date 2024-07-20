import { Student } from "../entities/student";
import type { StudentRepository } from "../repositories/student-repository";

interface CreateStudentProps{
    name: string;
    age: number;
    email?: string;
    ra: string;
}

export class CreateStudentUseCase{
  constructor(private studentRepository:StudentRepository){}
  
    async execute({name, age, email, ra}: CreateStudentProps){
        const newStudent = new Student(name , age , email, ra);
        await this.studentRepository.create(newStudent)
        
        return newStudent
    }
}