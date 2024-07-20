import { expect, test } from "vitest";
import { CreateGradeUseCase } from "./create-grade";

test("must be possible create a new grade", () => {
    const createGrade = new CreateGradeUseCase()

    const grade = createGrade.execute({
        matterId: '1',
        score: 9.5,
        studentId: '1'
    })

    expect(grade.score).toEqual(9.5);
})