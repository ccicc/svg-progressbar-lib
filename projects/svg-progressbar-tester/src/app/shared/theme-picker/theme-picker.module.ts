import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatTooltipModule, MatGridListModule, MatIconModule } from '@angular/material';

import { StyleManagerService } from './style-manager/style-manager.service';
import { ThemeStorageService } from './theme-storage/theme-storage.service';

import { ThemePickerComponent } from './theme-picker.component';

@NgModule({
  declarations: [ThemePickerComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatGridListModule, MatIconModule],
  exports: [ThemePickerComponent]
})
export class ThemePickerModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemePickerModule,
      providers: [StyleManagerService, ThemeStorageService]
    };
  }
}
