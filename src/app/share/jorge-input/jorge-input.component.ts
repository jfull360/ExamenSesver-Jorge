import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-jorge-input',
  templateUrl: './jorge-input.component.html',
  styleUrls: ['./jorge-input.component.css']
})
export class JorgeInputComponent  {

  @Input() form!: FormGroup;
  @Input() clase = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() name = '';
  @Input() maxLength = 255;
  @Input() type = 'text';
  @Input() pattern = '';
}
