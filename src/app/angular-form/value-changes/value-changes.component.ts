import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-value-changes',
  templateUrl: './value-changes.component.html',
  styleUrls: [ './value-changes.component.scss' ]
})
export class ValueChangesComponent implements OnInit {


  valueChanges: FormControl = new FormControl('');
  history: string[] = [];

  constructor() {
  }

  updateName() {
    this.valueChanges.setValue('updated');
  }

  ngOnInit() {
    this.valueChanges.valueChanges.subscribe(v => {
      this.history.push(v);
    });
  }

}
