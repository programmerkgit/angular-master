import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRouterRoutingModule } from './angular-router-routing.module';
import { AngularRouterComponent } from './angular-router.component';
import { LinkableModule } from '../linkable/linkable.module';
import { UrlTreeComponent } from './url-tree/url-tree.component';
import { ActivatedRouteComponent } from './activated-route/activated-route.component';
import { RouterEventComponent } from './router-event/router-event.component';


@NgModule({
  declarations: [ AngularRouterComponent, UrlTreeComponent, ActivatedRouteComponent, RouterEventComponent ],
  imports: [
    CommonModule,
    AngularRouterRoutingModule,
    LinkableModule
  ]
})
export class AngularRouterModule {
}
