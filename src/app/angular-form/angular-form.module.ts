import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFormRoutingModule } from './angular-form-routing.module';
import { AngularFormComponent } from './angular-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueChangesComponent } from './value-changes/value-changes.component';
import { SetValueComponent } from './set-value/set-value.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { UseFormBuilderComponent } from './use-form-builder/use-form-builder.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


@NgModule({
  declarations: [ AngularFormComponent, ValueChangesComponent, SetValueComponent, GroupFormComponent,
    UseFormBuilderComponent, TemplateDrivenFormComponent ],
  imports: [
    CommonModule,
    AngularFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AngularFormModule {
}
