import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers: [ProductosService, { provide: 'endPoint', useValue: '?category=powder' }]
})
export class CategoryComponent implements OnInit {

  constructor(private productosService: ProductosService) { }
 
  any_brand_arreglo: Producto[] = [];

  
  ngOnInit(): void {

    this.productosService.obtener_data().subscribe(item => {
      if (item != null) {
        this.any_brand_arreglo = item
      }
    },
     error => Swal.fire('Error no se pudo obtener la información', error, 'error')
    );

  }

}
