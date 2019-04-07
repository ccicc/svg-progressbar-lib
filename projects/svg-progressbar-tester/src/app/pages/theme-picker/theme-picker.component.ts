import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule } from '@angular/material';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [ThemePickerComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  exports: [ThemePickerComponent]
})
export class ThemePickerModule {}
