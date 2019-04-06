import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgProgressbarLibModule } from 'svg-progressbar-lib';
import { NavbarModule } from './pages/navbar/navbar.component';
import { ThemePickerModule } from './pages/theme-picker/theme-picker.component';

@NgModule({
  declarations: [AppComponent, ThemePickerModule],
  imports: [BrowserModule, BrowserAnimationsModule, SvgProgressbarLibModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
