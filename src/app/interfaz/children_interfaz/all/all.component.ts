import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-any-brand',
  templateUrl: './all.component.html',
  providers: [ProductosService, { provide: 'endPoint', useValue: '' }]
})
export class AllComponent implements OnInit {

  constructor(private productosService: ProductosService) { }

  any_brand_arreglo: Producto[] = [];

  ngOnInit(): void {

    this.productosService.obtener_data().subscribe(item => {
      if (item != null) {
        this.any_brand_arreglo = item
        console.log(this.any_brand_arreglo)
      }
    },
      error => Swal.fire('Error no se pudo obtener la información', error, 'error')
    );

  }

}
