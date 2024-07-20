import { randomUUID } from "crypto";

class Question {
    public id: string;
    public title: string;
    public content: string;
    public authorId: string

    constructor(title: string, content: string, authorId: string, id?: string) {
        this.id = id ?? randomUUID();
        this.authorId = authorId
        this.title = title;
        this.content = content;
    }
}