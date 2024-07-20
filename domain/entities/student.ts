import { randomUUID } from "crypto";
import {} from 'node:crypto'
export class Student {
    public ra: string;
    public name: string;
    public age: number
    public email?: string;

    constructor(name: string, age: number, email?:string, ra?: string) {
        this.ra = ra ?? randomUUID();
        this.name = name;
        this.age = age;
        this.email = email;
        
    }
}