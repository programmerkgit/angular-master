import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: [ './errors.component.scss' ]
})
export class ErrorsComponent implements OnInit {


  formGroup = this.fb.group({
    name: [ '', Validators.maxLength(8) ],
    email: [ '', Validators.required ],
    password: [ '', [ Validators.required, Validators.minLength(8) ] ]
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

}
