import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'app-page-nav-list',
  templateUrl: './page-nav-list.component.html',
  styleUrls: ['./page-nav-list.component.scss'],
  animations: [
    trigger('navExpansion', [
      state('expanded', style({ height: '*', opacity: 1 })),
      state('collapsed', style({ height: '0px', opacity: 0 })),
      transition('collapsed <=> expanded', [animate('0.15s ease-out')])
    ])
  ]
})
export class PageNavListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
