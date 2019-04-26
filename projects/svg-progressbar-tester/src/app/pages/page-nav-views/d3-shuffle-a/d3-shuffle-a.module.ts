import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { D3ShuffleAComponent } from './d3-shuffle-a.component';

const D3_SHUFFLE_A_ROUTES: Routes = [{ path: '', component: D3ShuffleAComponent }];

@NgModule({
  declarations: [D3ShuffleAComponent],
  imports: [CommonModule, RouterModule.forChild(D3_SHUFFLE_A_ROUTES)]
})
export class D3ShuffleAModule {}
