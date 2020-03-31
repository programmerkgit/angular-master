import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterEventComponent } from './router-event.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


const routes: Routes = [
  {
    path: '', component: RouterEventComponent, children: [
      {path: 'a', component: AComponent, data: {a: true}},
      {path: 'b', component: BComponent, data: {b: true}},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RouterEventRoutingModule {
}
