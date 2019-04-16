/* tslint:disable variable-name */

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private _title: string;
  constructor(private bodyTitle: Title) {}

  public get title() {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
    this._updateTitle();
  }

  private _updateTitle(): void {
    this.bodyTitle.setTitle(this._title);
  }
}
