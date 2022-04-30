
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';
import { map } from 'rxjs/operators';
import { get_conversiones_fromEUR } from '../models/obtener_conversiones_fromEUR';

export class api_metodo {

  protected url = "https://makeup-api.herokuapp.com/api/v1/products.json";
  protected url_cambiar_moneda = "http://api.exchangeratesapi.io/v1/latest?access_key=978740c918d9d5541176e20e454ce299";

  arreglo : any =[];
  //https://api.exchangeratesapi.io/v1/latest?access_key=978740c918d9d5541176e20e454ce299
  constructor(protected httpClient: HttpClient, protected endpoint: string,) {}

  public obtener_data(): Observable<Producto[]>{
    console.log(this.endpoint)
    return this.httpClient.get<Producto[]>(`${this.url}${this.endpoint}`).pipe(map (res => res as Producto[])
    )
  }

  
  public get_new_price(moneda: string){
    console.log("llego moneda al post", moneda);
    return this.httpClient.get<get_conversiones_fromEUR>(`${this.url_cambiar_moneda}`).pipe(map (resp => {

        console.log("as objeto",resp.rates);
        let arreglo : any = [];
        arreglo.push(resp.rates);
        console.log("as JSON" , arreglo)

        let conversion : number = 0;

        for (const property in resp.rates) {
          console.log(property);
          console.log("...");
          console.log(resp.rates[property]);
          if(moneda == property){
              conversion = resp.rates[property];
          }
        }
        
        console.log("la conversion es: ", conversion)
        return conversion;
  }));
  }

}