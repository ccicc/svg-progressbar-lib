import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgProgressbarLibModule } from 'svg-progressbar-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SvgProgressbarLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
