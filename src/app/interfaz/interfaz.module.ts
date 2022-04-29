
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { JorgeInputComponent } from '../share/jorge-input/jorge-input.component';
import { JorgeButtonComponent } from '../share/jorge-button/jorge-button.component';
import { JorgeCardComponent  } from '../share/jorge-card/jorge-card.component';

//LIBRERIAS ANGULAR

import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Componente_PadreComponent } from './Componente_padre/Componente_padre.component';
import { AnyBrandComponent } from './children_interfaz/any-brand/any-brand.component';
import { CategoryComponent } from './children_interfaz/category/category.component';
import { ProductTypeComponent } from './children_interfaz/product-type/product-type.component';
import { AuthRoutingModule } from './interfaz-routing.module';

import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

import { InterfazComponent } from './interfaz.component';
import { AllComponent } from './children_interfaz/all/all.component';
import { SelectPaisComponent } from './children_interfaz/select-pais/select-pais.component';
import { JorgeSelectComponent } from '../share/jorge-select/select.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    JorgeInputComponent,
    JorgeButtonComponent,
    JorgeCardComponent,
    Componente_PadreComponent,
    AnyBrandComponent,
    AllComponent,
    CategoryComponent,
    ProductTypeComponent,
    InterfazComponent,
    JorgeSelectComponent,
    SelectPaisComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
    HttpClientModule,
    MatSidenavModule

  ]
})
export class MenuModule { }