import { Component, OnInit } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RouterOutlet } from '@angular/router';

const links = [
  'reactive-form',
  'angular-router'
];

@Component({
  selector: 'app-router-event',
  templateUrl: './router-event.component.html',
  styleUrls: [ './router-event.component.scss' ]
})
export class RouterEventComponent implements OnInit {


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
