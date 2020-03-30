import { Component } from '@angular/core';
import { Linkable } from './linkable/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  links: Linkable[] = [
    {url: 'angular-form'},
    {url: 'angular-router'},
    {
      text: 'angular-form', children: [
        {url: 'angular-form/errors', text: 'errors'},
        {url: 'angular-form/set-value', text: 'set-value'},
        {url: 'angular-form/template-driven-form', text: 'template-drive-form'},
      ]
    },
    {
      text: 'angular-router', children: [
        {url: 'angular-router/router-event'}
      ]
    }
  ];
}
