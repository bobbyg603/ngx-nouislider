import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxNouisliderModule } from 'projects/ngx-nouislider/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
