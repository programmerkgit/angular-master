import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
  }

}
