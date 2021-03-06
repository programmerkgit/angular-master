import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './angular-form.component';
import { ValueChangesComponent } from './value-changes/value-changes.component';
import { SetValueComponent } from './set-value/set-value.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { UseFormBuilderComponent } from './use-form-builder/use-form-builder.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ErrorsComponent } from './errors/errors.component';
import { ValidatorsComponent } from './validators/validators.component';


const routes: Routes = [
  {
    path: 'angular-form', component: AngularFormComponent, children: [
      {path: 'value-changes', component: ValueChangesComponent},
      {path: 'set-value', component: SetValueComponent},
      {path: 'group-form', component: GroupFormComponent},
      {path: 'use-form-builder', component: UseFormBuilderComponent},
      {path: 'template-driven-form', component: TemplateDrivenFormComponent},
      {path: 'errors', component: ErrorsComponent},
      {path: 'validators', component: ValidatorsComponent},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AngularFormRoutingModule {
}
