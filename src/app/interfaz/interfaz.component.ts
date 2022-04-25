import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent implements OnInit {

  nombre_usuario = sessionStorage.getItem('nombre_usuario');
  link_extra = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.link_extra = this.route.snapshot.paramMap.get('id')!;
  }

  @Output() sidenavClose = new EventEmitter();

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
