import { randomUUID } from "crypto";
import { Entity } from "../../core/entity";

interface GradeProps{
     studentId: string;
     matterId: string;
     score: number;
}
export class Grade extends Entity<GradeProps> {
    get score(){
        return this.props.score
    }

    constructor(props: GradeProps, id?: string) {
        super(props, id)
       
    }
}