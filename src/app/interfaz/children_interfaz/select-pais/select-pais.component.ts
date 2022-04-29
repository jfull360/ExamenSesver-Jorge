import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Paises } from 'src/app/models/obtener-monedas';
import { ProductosService } from 'src/app/services/paises';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-select-pais',
  templateUrl: './select-pais.component.html',
  styleUrls: ['./select-pais.component.css'],
  providers: [ProductosService, { provide: 'endPoint', useValue: '' }]
})
export class SelectPaisComponent implements OnInit {

  constructor(private productosService: ProductosService, private fb: FormBuilder, private router: Router) { }
  any_brand_arreglo: any[] = [];
  success:boolean=true;
  form!: FormGroup;
  user_selection: any[]=[];


 //totalAngularPackages: Paises= {success:true, symbols:[]};

  ngOnInit(): void {


    this.form = this.fb.group({
      symbols: [],
      name:""
    });


      this.productosService.obtener_data().subscribe(data => {
    if (data != null) {


      //this.success=data.success_;
      //this.any_brand_arreglo.push(data.symbols)

     // this.any_brand_arreglo.push({"success":item.success, "symbols":item.symbols})
      

     // this.totalAngularPackages = {"success": true , symbols:[]  }

      //this.any_brand_arreglo  = {"symbols": item}

      for (const property in data.symbols) {
        this.any_brand_arreglo.push({"Pais":data.symbols[property],"Signo_cambio":property})
      }

      console.log(this.any_brand_arreglo)

    
    }

    

  },
    error => Swal.fire('Error no se pudo obtener la información', error, 'error')
  );
  }
  

  Siguiente = (): void => {
    Swal.fire({
      title: '¿Esta Seguro?',
      icon: 'question',
      text: 'Los precios mostrados seran cambiados a la moneda local del pais que selecciono',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
      showDenyButton: true,
      denyButtonText: 'Cancelar',
    }).then(result => {
      if (result.isConfirmed) {
        this.user_selection.push(this.form.value.name) //FORMAMOS EL JSON
        console.log("dijo SI",this.user_selection);
        localStorage.setItem("Moneda", JSON.stringify(this.user_selection) )


        this.router.navigate([`/Menu`,"any-brand"]);
        

      }
    });
  }



}
