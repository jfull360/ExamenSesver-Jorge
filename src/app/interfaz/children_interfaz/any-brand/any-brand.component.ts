import { Component, OnInit, Input } from '@angular/core';
import { Paises } from 'src/app/models/obtener-monedas';
import { Producto } from 'src/app/models/producto.model';
import { Symbols } from 'src/app/models/symbols';
import { ProductosService } from 'src/app/services/productos.service';
import {api_metodo} from 'src/app/services/api-metodos.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { cambiar_moneda } from 'src/app/services/cambiar-moneda';

@Component({
  selector: 'app-any-brand',
  templateUrl: './any-brand.component.html',
  providers: [ProductosService, { provide: 'endPoint', useValue: '?brand=colourpop' }],
  
})
export class AnyBrandComponent implements OnInit {

  constructor(private productosService: ProductosService) { }

  any_brand_arreglo: Producto[] = [];
  Pais="";
  Signo_cambio="";
  conversion:number=0;
  //get_new_price!: Subscription;
  //user_selection: Symbols=[];

  ngOnInit(): void {

    
    let user_selection : Symbols[] = JSON.parse(localStorage.getItem("Moneda")!) ;
    
    console.log("recibo de memoria local", user_selection)
    for (var i = 0; i < user_selection.length; i++) {
      this.Pais=user_selection[i]["Pais"];
      this.Signo_cambio=user_selection[i]["Signo_cambio"];
    }
    console.log(this.Pais)
    console.log(this.Signo_cambio)

    this.productosService.get_new_price(this.Signo_cambio).subscribe(item =>{

      if (item != null) {
        //AQUI OBTENDRIAMOS YA ELRESUTADO DE LA MONEDA CONVERTIDA
        
        this.conversion=item;
      }

      console.log("me llego",this.conversion)
    });

    this.productosService.obtener_data().subscribe(item => {
      if (item != null) {
        this.any_brand_arreglo = item
        //console.log(this.any_brand_arreglo)
      }
    },
      error => Swal.fire('Error no se pudo obtener la información', error, 'error')
    );



  }

}
