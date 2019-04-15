import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material';

import { HomePageModule } from './pages/home-page/home-page.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HomePageModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.matIconRegistry.setDefaultFontSetClass('fa');
  }
}
