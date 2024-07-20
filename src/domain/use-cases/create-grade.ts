import { Grade } from "../entities/grade";

interface CreateGradeRequest {
    studentId: string;
    matterId: string;
    score: number;
}

export class CreateGradeUseCase {
    execute({ matterId, studentId, score }: CreateGradeRequest) {
        const grade = new Grade(matterId, studentId, score)
        return grade
    }
}