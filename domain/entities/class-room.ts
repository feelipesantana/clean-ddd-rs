import { randomUUID } from "crypto";

class ClassRoom {
    public id: string;
    public students: string[];
    public teacher: string;
    public serie: string;

    constructor(students: string[], teacher: string, serie: string, id?: string) {
        this.id = id ?? randomUUID();
        this.serie = serie;
        this.students = students;
        this.teacher = teacher;
    }

}