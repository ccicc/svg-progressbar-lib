import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @HostBinding('class') public rootClass = 'mat-elevation-z6';
  public constructor() {}
}
