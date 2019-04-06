import { NgModule, Component, OnInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @HostBinding('class') public rootClass = 'mat-elevation-z6';
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [NavbarComponent]
})
export class NavbarModule {}
