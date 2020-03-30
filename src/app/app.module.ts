import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFormModule } from './angular-form/angular-form.module';
import { LinkableModule } from './linkable/linkable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFormModule,
    LinkableModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
