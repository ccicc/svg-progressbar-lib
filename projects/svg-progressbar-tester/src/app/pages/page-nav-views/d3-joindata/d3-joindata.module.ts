import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { D3JoindataComponent } from './d3-joindata.component';

const D3_JOINDATA_ROUTES: Routes = [
  { path: '', component: D3JoindataComponent }
];

@NgModule({
  declarations: [D3JoindataComponent],
  imports: [CommonModule, RouterModule.forChild(D3_JOINDATA_ROUTES)]
})
export class D3JoindataModule {}
