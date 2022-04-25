
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';
import { map } from 'rxjs/operators';

export class api_metodo {

  protected url = "https://makeup-api.herokuapp.com/api/v1/products.json"
  
  constructor(
    protected httpClient: HttpClient,
    protected endpoint: string,
  ) {}

  public obtener_data(): Observable<Producto[]>{
    console.log(this.endpoint)
    return this.httpClient.get<Producto[]>(`${this.url}${this.endpoint}`).pipe(map (res => res as Producto[])
    )
  }

}
