import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: [ './template-driven-form.component.scss' ]
})
export class TemplateDrivenFormComponent implements OnInit {

  name = 'name';
  age: number = 30;

  constructor() {
  }

  onSubmit() {
  }

  passForm(a: NgForm, b: FormGroup) {
    console.log(a, b);
  }

  ngOnInit() {
  }

}
