import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../../interfaces/login.interface';
import { Usuario } from "../../models/usuario.model";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  form!: FormGroup;
  usuario = new Usuario();

  ngOnInit(): void {


    this.form = this.fb.group({
      nombre_usuario: [""],
      password: [""],
    });
  }


Iniciar_sesion(): void{

  this.usuario.nombre_usuario = this.form.get('nombre_usuario')?.value;
  this.usuario.password = this.form.get('password')?.value;

  if (this.usuario.nombre_usuario === "jorge.dom" && this.usuario.password === "1234"){

    //guardar usuario and pass en localstorage
    sessionStorage.setItem('nombre_usuario', (this.usuario.nombre_usuario));
    sessionStorage.setItem('password', (this.usuario.password));
    
    this.router.navigate([`/Menu`,"all"]);
  }
    else {
      Swal.fire({
        title: '¡Advertencia!',
        text: `Credenciales incorrectas, Usuario o contraseña incorrecta`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    } 
}
}