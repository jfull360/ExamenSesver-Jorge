import { Symbols } from "./symbols";

export class Paises {

  constructor(

    
    private _name?: boolean,
    private symbols_?: Array< Symbols>,

    
  ){
    
  }

  public get success_():boolean {
    return this._name!;
  }
  public set success_(value:boolean) {
    this._name = value;
  }

  public get symbols(): Array<Symbols>{
    return this.symbols_!;
  }
  public set symbols(value: Array<Symbols>) {
    this.symbols_= value;
  }

  
}
