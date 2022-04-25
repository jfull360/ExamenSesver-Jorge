import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { api_metodo } from './api-metodos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends api_metodo {

  constructor(
    protected http: HttpClient,
    @Inject('endPoint') endPoint: string
  ) {
    super(http, endPoint);
  }

}
