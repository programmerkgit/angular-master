import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularRouterComponent } from './angular-router.component';
import { UrlTreeComponent } from './url-tree/url-tree.component';
import { ActivatedRouteComponent } from './activated-route/activated-route.component';


const routes: Routes = [
  {
    path: '', component: AngularRouterComponent, children: [
      {
        path: 'router-event', loadChildren: () => import('./router-event/router-event.module').then(v => v.RouterEventModule)
      },
      {path: 'url-tree', component: UrlTreeComponent},
      {path: 'activated-route', component: ActivatedRouteComponent},
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AngularRouterRoutingModule {
}
