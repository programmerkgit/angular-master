import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRouterRoutingModule } from './angular-router-routing.module';
import { AngularRouterComponent } from './angular-router.component';
import { RouterEventComponent } from './router-event/router-event.component';
import { LinkableModule } from '../linkable/linkable.module';


@NgModule({
  declarations: [AngularRouterComponent, RouterEventComponent],
  imports: [
    CommonModule,
    AngularRouterRoutingModule,
    LinkableModule
  ]
})
export class AngularRouterModule { }
