import { Component, OnInit } from '@angular/core';
import { Link, Linkable } from '../linkable/link';

@Component({
  selector: 'app-angular-router',
  templateUrl: './angular-router.component.html',
  styleUrls: [ './angular-router.component.scss' ]
})
export class AngularRouterComponent implements OnInit {

  links: Linkable[] = [
    new Link('router-event'),
    {url: 'url-tree'},
    {url: 'activated-route', text: 'activated-route', queryParams: {query: '1'}}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
