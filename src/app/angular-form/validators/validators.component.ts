import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: [ './validators.component.scss' ]
})
export class ValidatorsComponent implements OnInit {

  userForm = this.fb.group({
    name: [ 'name', [ Validators.required, Validators.maxLength(10) ] ],
    email: [ '', [ Validators.email, Validators.required ] ],
    password: [ '', [ Validators.required, Validators.minLength(8) ] ],
    age: [ 1, [ Validators.min(0), Validators.max(100) ] ],
    agree: [ false, [ Validators.requiredTrue ] ]
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

}
