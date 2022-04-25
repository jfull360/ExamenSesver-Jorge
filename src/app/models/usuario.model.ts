
export class Usuario {

  constructor(

    
    private _user?: string,
    private _password?: string,
    
  ){
    
  }

  public get nombre_usuario(): string {
    return this._user!;
  }
  public set nombre_usuario(value: string) {
    this._user = value;
  }
  public get password(): string {
    return this._password!;
  }
  public set password(value: string) {
    this._password = value;
  }

  
}
