import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPropertyComponent } from './router-property.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '', component: RouterPropertyComponent, children: [
      {path: 'a', component: AComponent, data: {a: true}},
      {path: 'b', component: BComponent, data: {b: true}},
      {path: '**', component: PageNotFoundComponent, data: {noMatch: true}}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RouterPropertyRoutingModule {
}
