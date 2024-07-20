import { randomUUID } from "crypto";

export class Leaders{
  public id: string;
  public name: string;
  public level: "MAX" | "MIN";


  constructor(name: string, level: "MAX" | "MIN", id?: string){
    this.id = id ?? randomUUID();
    this.name = name;
    this.level = level;
  }
}
