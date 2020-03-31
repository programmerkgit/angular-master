import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterEventRoutingModule } from './router-event-routing.module';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RouterEventComponent } from './router-event.component';


@NgModule({
  declarations: [AComponent, BComponent, RouterEventComponent],
  imports: [
    CommonModule,
    RouterEventRoutingModule
  ]
})
export class RouterEventModule { }
