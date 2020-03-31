import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularRouterComponent } from './angular-router.component';
import { UrlTreeComponent } from './url-tree/url-tree.component';
import { ActivatedRouteComponent } from './activated-route/activated-route.component';
import { RouterEventComponent } from './router-event/router-event.component';
import { RouterLinkComponent } from './router-link/router-link.component';


const routes: Routes = [
  {
    path: '', component: AngularRouterComponent, children: [
      {
        path: 'router-property', loadChildren: () => import('./router-property/router-property.module').then(v => v.RouterPropertyModule)
      },
      {path: 'url-tree', component: UrlTreeComponent},
      {path: 'activated-route', component: ActivatedRouteComponent},
      {path: 'router-event', component: RouterEventComponent},
      {path: 'router-link', component: RouterLinkComponent},
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AngularRouterRoutingModule {
}
