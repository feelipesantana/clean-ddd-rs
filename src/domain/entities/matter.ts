import { randomUUID } from "crypto";
import { Entity } from "../../core/entity";

interface MatterProps{
    name: string;
    teacherId: string;

}
export class Matter extends Entity{
   
    constructor(props:MatterProps , id?: string) {
        super(props,id)
        
    }
}