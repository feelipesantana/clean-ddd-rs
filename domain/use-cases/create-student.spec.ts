import { expect, test } from "vitest";
import { CreateStudentUseCase } from "./create-student";
import { randomUUID } from "crypto";
import type { StudentRepository } from "../repositories/student-repository";
import type { Student } from "../entities/student";

const fakeStudentRepository: StudentRepository = {
  create: async (student: Student) => {
    return ;
  }
}

test("Must be possible create a new Student", async () => {

  const createStudentUseCase = new CreateStudentUseCase(fakeStudentRepository);

    const createStudent = await createStudentUseCase.execute({
      ra: randomUUID(),
      name: "Felipe Santana",
      age: 28,
      email: "test@example.com"
    })

    expect(createStudent.name).toEqual("Felipe Santana");
    expect(createStudent.age).toEqual(28);

})