import { randomUUID } from "crypto";
import { Entity } from "../../core/entity";

interface TeacherProps{
    name: string;
    matterId: string;

}
export class Teacher extends Entity<TeacherProps>{
   
    constructor(props:TeacherProps , id?: string) {
        super(props,id);
    }
}