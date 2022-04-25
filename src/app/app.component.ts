import { Component,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen-sesver-Jorge';
  nombre_usuario = ""; 

  constructor(private router: Router){}
  @Output() sidenavClose = new EventEmitter();

  ngOnInit():void{

    this.nombre_usuario = sessionStorage.getItem('nombre_usuario')!;

    if(this.nombre_usuario==="jorge.dom"){
    console.log("usuario verificado")

    }else{
    console.log("usuario NO verificado")
    this.router.navigate([`/auth`,"login"]);
    }

  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  
  log(): boolean {
    if (this.router.url === '/auth/login' ){
      return false;
    }
    else {
      return true;
    }
  }




}
