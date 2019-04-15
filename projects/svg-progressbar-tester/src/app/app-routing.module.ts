import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const APP_PAGE_ROUTES: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_PAGE_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
