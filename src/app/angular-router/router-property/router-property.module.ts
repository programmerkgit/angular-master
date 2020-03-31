import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterPropertyRoutingModule } from './router-property-routing.module';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RouterPropertyComponent } from './router-property.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [ AComponent, BComponent, RouterPropertyComponent, PageNotFoundComponent ],
  imports: [
    CommonModule,
    RouterPropertyRoutingModule
  ]
})
export class RouterPropertyModule {
}
