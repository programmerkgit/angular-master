import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-set-value',
  templateUrl: './set-value.component.html',
  styleUrls: [ './set-value.component.scss' ]
})
export class SetValueComponent implements OnInit {

  value = new FormControl('');
  target = new FormControl('');

  constructor() {
  }

  setValue(value: string) {
    this.target.setValue(value);
  }

  ngOnInit() {
  }

}
