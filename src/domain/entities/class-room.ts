import { randomUUID } from "crypto";
import { Entity } from "../../core/entity";

interface ClassRoomProps{
    students: string[];
    teacher: string;
    serie: string;
}

export class ClassRoom extends Entity<ClassRoomProps>{

}