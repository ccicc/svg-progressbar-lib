import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { SvgProgressbarLibModule } from 'svg-progressbar-lib';
import { NavbarModule } from './pages/navbar/navbar.component';
import { ThemePickerModule } from './pages/theme-picker/theme-picker.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    SvgProgressbarLibModule,
    NavbarModule,
    ThemePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.matIconRegistry.setDefaultFontSetClass('fa');
  }
}
