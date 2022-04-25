import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-jorge-card',
  templateUrl: './jorge-card.component.html',
  styleUrls: ['./jorge-card.component.css']
})
export class JorgeCardComponent  {


  @Input() title = '';
  @Input() subtitle = '';

  @Input() Brand = "";
  @Input() Image_link = "";
  @Input() Name = "";
  @Input() Price = "";
  @Input() Rating :number = 0;
  @Input() Description = "";
  @Input() Product_type = "";
  @Input() Category = "";
  @Input() Product_colors = [];
  
    constructor(private modalService: NgbModal) {}
  
    open() {
      const modalRef = this.modalService.open(JorgeModalComponent);

      modalRef.componentInstance.Name = this.Name;
      modalRef.componentInstance.Image_link = this.Image_link;
      modalRef.componentInstance.Brand = this.Brand;
      modalRef.componentInstance.Price = this.Price;
      modalRef.componentInstance.Ratting = this.Rating;
      modalRef.componentInstance.Description = this.Description;
      modalRef.componentInstance.Product_type = this.Product_type;
      modalRef.componentInstance.Category = this.Category;
      modalRef.componentInstance.Product_colors = this.Product_colors;
     
      console.log(modalRef.componentInstance)

    }
  
}


import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-content',
  template: `

    <div class="modal-header">
      <h4 class="modal-title">Informacion del producto</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <img src="{{Image_link}}" style="
  background-size: cover;
  position: relative;
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 100%;">
      <p>Brand: {{Brand}}</p>
      <p>Nombre: {{Name}}</p>
      <p>Precio: {{Price}}</p>
      <p>Rango: {{Rating}}</p>
      <p>Descripcion: {{Description}}</p>
      <p>Tipo de Producto: {{Product_type}}</p>
      <p>Categoria: {{Category}}</p>
      <p>Productos con los colores: {{Product_colors}}</p>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})

export class JorgeModalComponent {

  @Input() Brand = "";
  @Input() Image_link = "";
  @Input() Name = "";
  @Input() Price = "";
  @Input() Rating : number= 0;
  @Input() Description = "";
  @Input() Product_type = "";
  @Input() Category = "";
  @Input() Product_colors = [];

  constructor(public activeModal: NgbActiveModal) { }
}

