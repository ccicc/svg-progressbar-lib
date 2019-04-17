import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { CategoryListComponent } from './pages/page-nav-views/category-list/category-list.component';
import { SvgProgressbarComponent } from './pages/page-nav-views/svg-progressbar/svg-progressbar.component';

const APP_PAGE_ROUTES: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: 'categories', component: CategoryListComponent, data: { title: 'categories' } },
      { path: 'svg-progressbar', component: SvgProgressbarComponent, data: { title: 'svg-progressbar' } }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_PAGE_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
