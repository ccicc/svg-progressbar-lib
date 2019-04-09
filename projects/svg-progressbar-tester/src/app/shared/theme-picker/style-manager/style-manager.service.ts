/* tslint:disable variable-name */

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class StyleManagerService {
  public constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {}

  public setStyle(name: string, href: string): void {
    this._getStyleLinkElement(name).setAttribute('src', href);
  }

  public removeStyle(name: string): void {
    const linkEle = this._queryStyleLinkElement(name);
    if (linkEle) {
      this._document.head.removeChild(linkEle);
    }
  }

  private _getStyleLinkElement(name: string): HTMLLinkElement {
    return this._queryStyleLinkElement(name) || this._createStyleLinkElement(name);
  }

  private _createStyleLinkElement(name: string): HTMLLinkElement {
    const linkEle = document.createElement('link');
    linkEle.setAttribute('rel', 'stylesheet');
    linkEle.classList.add(this._createStyleLinkClass(name));
    this._document.head.appendChild(linkEle);
    return linkEle;
  }

  private _queryStyleLinkElement(name: string): HTMLLinkElement | null {
    return this._document.head.querySelector(`link[rel=stylesheet].${this._createStyleLinkClass(name)}`);
  }

  private _createStyleLinkClass(name: string): string {
    return `style-manager-${name}`;
  }
}
