import { randomUUID } from "crypto";
import {} from 'node:crypto'
import { Entity } from "../../core/entity";

interface StudentProps{
    ra: string;
    name: string;
    age: number;
    email?: string;
}

export class Student extends Entity<StudentProps>{
    get name(){
        return this.props.name
    }
    get age(){
        return this.props.age
    }
    constructor(props:StudentProps, id?: string) {
        super(props,id)
       
        
    }
}