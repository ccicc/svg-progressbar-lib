/* tslint:disable variable-name */

import { NgModule, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatIconModule, MatTooltipModule, MatGridListModule } from '@angular/material';

import { TesterTheme, ThemeStorageService } from './theme-storage/theme-storage.service';
import { StyleManagerService } from './style-manager/style-manager.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemePickerComponent implements OnInit {
  public themes: TesterTheme[] = [
    {
      name: 'blue-deepPurple',
      primary: '#2196F3',
      accent: '#673AB7',
      isDark: false,
      isDefault: false
    },
    {
      name: 'teal-green',
      primary: '#009688',
      accent: '#4CAF50',
      isDark: false,
      isDefault: false
    },
    {
      name: 'amber-brown',
      primary: '#FFC107',
      accent: '#795548',
      isDark: false,
      isDefault: false
    },
    {
      name: 'bluegrey-amber',
      primary: '#607D8B',
      accent: '#FFC107',
      isDark: false,
      isDefault: true
    }
  ];
  public currentTheme: TesterTheme;

  public constructor(private _styleManager: StyleManagerService, private _themeStorage: ThemeStorageService) {
    const theme = this._themeStorage.getThemeForStorage();
    if (!theme) {
      this.selectTheme('blegrey-amber');
    } else {
      this.selectTheme(theme);
    }
  }

  public ngOnInit() {}

  public selectTheme(name: string) {
    const selectedTheme = this.themes.find(item => item.name === name);
    if (!selectedTheme) {
      return;
    }
    this.currentTheme = selectedTheme;
    if (this.currentTheme.isDefault) {
      this._styleManager.removeStyle('theme');
    } else {
      this._styleManager.setStyle('theme', `assets/themes/${this.currentTheme.name}.css`);
    }
    this._themeStorage.setThemeForStorage(this.currentTheme);
  }
}

@NgModule({
  declarations: [ThemePickerComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule, MatTooltipModule, MatGridListModule],
  exports: [ThemePickerComponent],
  providers: [StyleManagerService, ThemeStorageService]
})
export class ThemePickerModule {}
