import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageTitleService } from '../../shared/page-title/page-title.service';
import { sidenavAnimation } from './page-sidenav.animation';

@Component({
  selector: 'app-page-sidenav',
  templateUrl: './page-sidenav.component.html',
  styleUrls: ['./page-sidenav.component.scss'],
  animations: [sidenavAnimation]
})
export class PageSidenavComponent implements OnInit {
  constructor(private titleService: PageTitleService) {}

  ngOnInit() {}

  public getRouterTitle(outlet: RouterOutlet): string {
    const title = outlet.activatedRouteData.title;
    this.titleService.setTitle(title);
    return title;
  }
}
