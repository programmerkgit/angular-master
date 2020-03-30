import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkableComponent } from './linkable.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ LinkableComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LinkableComponent
  ]
})
export class LinkableModule {
}
