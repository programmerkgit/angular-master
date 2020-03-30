import { Component, Input, OnInit } from '@angular/core';
import { Linkable } from './link';

@Component({
  selector: 'app-linkable',
  templateUrl: './linkable.component.html',
  styleUrls: [ './linkable.component.scss' ]
})
export class LinkableComponent implements OnInit {

  @Input() linkables: Linkable[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
