import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomComponentsModule } from 'lib/src/custom-components.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
