import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-use-form-builder',
  templateUrl: './use-form-builder.component.html',
  styleUrls: [ './use-form-builder.component.scss' ]
})
export class UseFormBuilderComponent implements OnInit {

  userForm = this.fb.group({
    name: [ 'name' ],
    pictures: this.fb.array([
      '1',
      '2'
    ]),
    address: this.fb.group({
      street: [ '', Validators.required ],
      tel: [ '' ]
    })
  });
  path: string;
  value: string;

  constructor(
    private fb: FormBuilder
  ) {
  }

  get pictures(): FormArray {
    return this.userForm.get('pictures') as FormArray;
  }

  setPath(path: string, value: string) {
    this.userForm.get(path).setValue(value);
  }

  ngOnInit() {
    // formGroup.controls => key: control
    // formArray.controls => array of control
    // formGroup.get("key") => formGroup.controls.key
    this.setStreet();
  }

  setStreet() {
    this.userForm.get('address.street').setValue('streetA');
    this.setPictures();
  }

  setPictures() {
    this.userForm.get('pictures.0').setValue('pic-0');
    this.userForm.get('pictures.1').setValue('pic-1');
  }

}
