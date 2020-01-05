export class Product {

  constructor(private _id:number, private _name:string, private _description){}


  get id():number { return this._id; }
  get name():string { return this._name; }
  get description():string { return this._description; }


  set id(id: number) { this._id = id; }
  set name(name: string) { this._name = name; }  
  set description(description: string) { this._description = description; }
}