/* tslint:disable variable-name */

import { Injectable, EventEmitter, Optional, SkipSelf } from '@angular/core';

export interface TesterTheme {
  name: string;
  primary: string;
  accent: string;
  isDark: boolean;
  isDefault: boolean;
}

@Injectable()
export class ThemeStorageService {
  private static namespace = 'tester-theme';
  public themeChanged: EventEmitter<TesterTheme> = new EventEmitter<TesterTheme>();

  public constructor(@Optional() @SkipSelf() private _themeStorageService: ThemeStorageService) {
    if (this._themeStorageService) {
      throw new Error('ThemeStorageService repeated instantiation!');
    }
  }

  public setThemeForStorage(theme: TesterTheme): void {
    try {
      window.localStorage.setItem(ThemeStorageService.namespace, theme.name);
    } catch (error) {}
    this.themeChanged.emit(theme);
  }

  public getThemeForStorage(): string | null {
    try {
      return window.localStorage.getItem(ThemeStorageService.namespace) || null;
    } catch (error) {
      return null;
    }
  }

  public clearForStorage() {
    try {
      window.localStorage.removeItem(ThemeStorageService.namespace);
    } catch (error) {}
  }
}
