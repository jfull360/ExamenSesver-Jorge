import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente_PadreComponent } from './Componente_padre/Componente_padre.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: Componente_PadreComponent,
      children: [
        { path: 'login', component: LoginComponent},
        { path: '**', redirectTo: 'login'}
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
