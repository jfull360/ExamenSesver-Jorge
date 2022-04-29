
export class Symbols {

  constructor(

    
    private Pais_?: string,
    private Signo_cambio_?: string

    
  ){
    
  }

  public get Pais():string {
    return this.Pais_!;
  }
  public set Pais(value:string) {
    this.Pais_ = value;
  }

  public get Signo_cambio():string {
    return this.Signo_cambio_!;
  }
  public set Signo_Cambio(value:string) {
    this.Signo_cambio_ = value;
  }

  
}
