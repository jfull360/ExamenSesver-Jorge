

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './children_interfaz/all/all.component';
import { AnyBrandComponent } from './children_interfaz/any-brand/any-brand.component';
import { CategoryComponent } from './children_interfaz/category/category.component';
import { ProductTypeComponent } from './children_interfaz/product-type/product-type.component';
import { Componente_PadreComponent } from './Componente_padre/Componente_padre.component';
import { InterfazComponent } from './interfaz.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: Componente_PadreComponent,
      children: [
        { path: 'Menu', component: InterfazComponent},
        { path: 'all', component: AllComponent},
        { path: 'any-brand', component: AnyBrandComponent},
        { path: 'category', component: CategoryComponent},
        { path: 'product-type', component: ProductTypeComponent},
        { path: '**', redirectTo: 'all'}
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


