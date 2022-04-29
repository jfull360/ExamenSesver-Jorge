
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';
import { map } from 'rxjs/operators';

export class cambiar_moneda {

  protected url = "https://api.exchangeratesapi.io/v1/convert?access_key=978740c918d9d5541176e20e454ce299&from=USD&";
  
  constructor(
    protected httpClient: HttpClient,
    protected endpoint: string,
  ) {}

  public get_new_price(moneda: string): Observable<any[]>{
    console.log("llego moneda al post", moneda)
      //return this.httpClient.get<any[]>(`${this.url}${moneda}&amount=1/`, JSON.stringify(moneda));
      return this.httpClient.get<any[]>(`${this.url}${moneda}&amount=1/`)
  }

}
