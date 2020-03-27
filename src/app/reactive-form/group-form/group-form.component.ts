import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: [ './group-form.component.scss' ]
})
export class GroupFormComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl('first'),
    lastName: new FormControl('last'),
    address: new FormGroup({
      street: new FormControl('')
    }),
    pictures: new FormGroup({
      name: new FormControl('')
    }),
    friends: new FormArray([
      new FormControl('a'),
      new FormControl('b')
    ])
  });
  history: any[] = [];

  newFriend = new FormControl('new-friend');

  constructor() {
  }

  addFriend(friend: string) {
    (this.userForm.controls.friends as FormArray).push(new FormControl(friend));
    this.newFriend.reset();
  }

  setValue() {
    this.userForm.setValue({
      /* necessary all key and values */
      firstName: 'clear',
      lastName: 'last-name',
      address: {
        street: 'street'
      },
      pictures: {
        name: 'picture'
      },
      friends: [ 'a', 'b', 'c' ] // need just size array

    });
  }

  patchValue() {
    this.userForm.patchValue({
      friends: [ '' ]
    });
  }

  getValue() {
    return JSON.stringify(this.userForm.value);
  }

  ngOnInit() {
    this.userForm.valueChanges.subscribe(v => {
      this.history.push(JSON.stringify(v));
    });
  }

}
