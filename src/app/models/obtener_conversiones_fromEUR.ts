export class get_conversiones_fromEUR {

  constructor(

    
    private _rates?: [],
    //private symbols_?: Array< Symbols>,

    
  ){
    
  }

  public get rates():[] {
    return this._rates!;
  }
  public set rates(value:[]) {
    this._rates = value;
  }

  /*
  public get symbols(): Array<Symbols>{
    return this.symbols_!;
  }
  public set symbols(value: Array<Symbols>) {
    this.symbols_= value;
  }
*/
  
}
