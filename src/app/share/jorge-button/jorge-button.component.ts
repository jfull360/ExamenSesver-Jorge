import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-jorge-button',
  templateUrl: './jorge-button.component.html',
  styleUrls: ['./jorge-button.component.css']
})
export class JorgeButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Input() clase = '';
  @Input() label = '';
  @Input() isDisable = false;
  @Input() icon = '';
  @Input() tipo = 'button';
}
