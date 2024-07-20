import { Entity } from "../../core/entity";

interface LeadersProps{
  name: string;
  level: "MAX" | "MIN";
}
export class Leaders extends Entity<LeadersProps>{
 

  constructor(props: LeadersProps, id?: string){
    super(props, id);
   
  }
}
