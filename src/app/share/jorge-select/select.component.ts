import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'jorge-select',
  templateUrl: './select.component.html'
})
export class JorgeSelectComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() clase = '';
  @Input() name = '';
  @Input() label = '';
  @Input() options: any = [];
  @Output() select = new EventEmitter();

  ngOnInit(): void {
 console.log(this.name)
 //console.log(this.select)

}
 

  onSelected(event: MatSelectChange) {
    console.log(event.value)
      this.select.emit(event.value);
      
  }



}
