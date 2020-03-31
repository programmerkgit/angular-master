import { Component, OnInit } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RouterOutlet } from '@angular/router';

const links = [
  'reactive-form',
  'angular-router'
];

@Component({
  selector: 'app-router-property',
  templateUrl: './router-property.component.html',
  styleUrls: [ './router-property.component.scss' ]
})
export class RouterPropertyComponent implements OnInit {


  a: boolean;
  b: boolean;

  constructor() {
  }

  activate(component: any) {
    if (component instanceof AComponent) {
      this.a = true;
    }
    if (component instanceof BComponent) {
      this.b = true;
    }
  }


  deactivate(component: any) {
    if (component instanceof AComponent) {
      this.a = false;
    }
    if (component instanceof BComponent) {
      this.b = false;
    }
  }

  inspect(routerOutlet: RouterOutlet) {
    console.log(routerOutlet.isActivated, 'isActivated');
    console.log(routerOutlet.component, 'component');
    console.log(routerOutlet.activatedRoute, 'activatedRoute');
    console.log(routerOutlet.activatedRouteData, 'activatedRouteData');
  }

  ngOnInit() {

  }

}
