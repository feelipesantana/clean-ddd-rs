import { randomUUID } from "crypto";

export class Grade {
    public id: string;
    public studentId: string;
    public matterId: string;
    public score: number;

    constructor(studentId: string, matterId: string, score: number, id?: string) {
        this.id = id ?? randomUUID();
        this.studentId = studentId;
        this.matterId = matterId;
        this.score = score;
    }
}