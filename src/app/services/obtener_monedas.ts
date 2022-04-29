
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paises } from '../models/obtener-monedas';

export class Paises_ {

  protected url = "http://api.exchangeratesapi.io/v1/symbols?access_key=978740c918d9d5541176e20e454ce299"
  
  constructor(
    protected httpClient: HttpClient,
    protected endpoint: string,
  ) {}

  public obtener_data(): Observable<Paises>{
    return this.httpClient.get<Paises>(`${this.url}`)
  }

  public get_new_price(moneda: string): Observable<any[]>{
    console.log("llego moneda al post", moneda)
      //return this.httpClient.get<any[]>(`${this.url}${moneda}&amount=1/`, JSON.stringify(moneda));
      return this.httpClient.get<any[]>(`${this.url}${moneda}&amount=1/`)
  }

}
