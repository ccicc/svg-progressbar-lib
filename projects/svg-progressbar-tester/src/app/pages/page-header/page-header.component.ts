import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../shared/page-title/page-title.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  public pageTitle: string = '';
  constructor(private titleService: PageTitleService) {}

  ngOnInit() {
    this.titleService
      .getTitle()
      .pipe(delay(100))
      .subscribe(title => (this.pageTitle = title));
  }
}
