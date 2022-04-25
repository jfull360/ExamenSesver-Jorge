import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { Componente_PadreComponent } from './Componente_padre/Componente_padre.component';
import { LoginComponent } from './login/login.component';
import { JorgeInputComponent } from './share/jorge-input/jorge-input.component';
import { JorgeButtonComponent } from './share/jorge-button/jorge-button.component';

//LIBRERIAS ANGULAR

import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    JorgeInputComponent,
    JorgeButtonComponent,
    Componente_PadreComponent,
    LoginComponent
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
    MatFormFieldModule
  ]
})
export class AuthModule { }