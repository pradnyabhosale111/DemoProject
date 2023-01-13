import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PratikComponent } from './pratik/pratik.component';
import { PratapComponent } from './pratap/pratap.component';

@NgModule({
  declarations: [
    AppComponent,
    PratikComponent,
    PratapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
