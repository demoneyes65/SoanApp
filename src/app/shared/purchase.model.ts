export class Purchase{
  public name: string;
  //private _id: number;
  public type: string;
  public header: string;
  public cost: number;
  public exception: number;//this is the exception that is applied if one applies

  constructor(
    name: string,
    //id: number,
    type: string,
    header: string,
    cost: number,
    exception: number){
      this.name = name;
      //this._id = id;
      this.type = type;
      this.header = header;
      this.cost = cost;
      this.exception = exception;
    }


}
