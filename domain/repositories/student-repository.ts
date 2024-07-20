import type { Student } from "../entities/student";

export interface StudentRepository{
  create(student: Student): Promise<void>
}