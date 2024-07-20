import { randomUUID } from "crypto";

class Matter {
    public id: string;
    public name: string;
    public teacherId: string;

    constructor(name: string, teacherId: string, id?: string) {
        this.id = id ?? randomUUID();
        this.name = name;
        this.teacherId = teacherId;
    }
}