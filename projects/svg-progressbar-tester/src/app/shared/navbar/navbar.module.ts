import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { ThemePickerModule } from './../theme-picker/theme-picker.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [RouterModule, MatButtonModule, ThemePickerModule, MatIconModule, CommonModule],
  exports: [NavbarComponent]
})
export class NavbarModule {}
