//LIBRERIAS ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

//LIBRERIAS ROUTER
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//fxlayout
import { FlexLayoutModule } from '@angular/flex-layout';

//librerias para forms reactivos
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// COMPONENTES CREADOS
import { NavegacionComponent } from './navegacion/navegacion.component';
// import { LoginComponent } from './auth/login/login.component';
import { JorgeInputComponent } from './share/jorge-input/jorge-input.component';
import { JorgeButtonComponent } from './share/jorge-button/jorge-button.component';
import { JorgeCardComponent } from './share/jorge-card/jorge-card.component';
import { InterfazComponent } from './interfaz/interfaz.component';
import { AnyBrandComponent } from './interfaz/children_interfaz/any-brand/any-brand.component';
import { CategoryComponent } from './interfaz/children_interfaz/category/category.component';
import { ProductTypeComponent } from './interfaz/children_interfaz/product-type/product-type.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
