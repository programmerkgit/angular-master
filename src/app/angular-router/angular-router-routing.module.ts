import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularRouterComponent } from './angular-router.component';
import { RouterEventComponent } from './router-event/router-event.component';


const routes: Routes = [
  {
    path: '', component: AngularRouterComponent, children: [
      {path: 'router-event', component: RouterEventComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AngularRouterRoutingModule {
}
