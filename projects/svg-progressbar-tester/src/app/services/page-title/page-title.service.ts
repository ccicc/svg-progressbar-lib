/* tslint:disable variable-name */

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Injectable()
export class PageTitleService {
  private _title: Subject<string> = new Subject();

  public constructor(private bodyTitle: Title) {}

  public getTitle() {
    return this._title;
  }

  public setTitle(value: string) {
    this._updateTile(value);
    this._title.next(value);
  }

  private _updateTile(title: string) {
    this.bodyTitle.setTitle(title);
  }
}
