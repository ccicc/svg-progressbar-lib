/* tslint:disable variable-name */

import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PageTitleService {
  private _title: Subject<string> = new Subject();

  public constructor(
    private bodyTitle: Title,
    @Optional() @SkipSelf() private _pageTitleService: PageTitleService
  ) {
    if (this._pageTitleService) {
      throw new Error('PageTitleService repeated instantiation!');
    }
  }

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
