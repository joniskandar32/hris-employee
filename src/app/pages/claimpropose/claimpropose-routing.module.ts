import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimproposePage } from './claimpropose.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimproposePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimproposePageRoutingModule {}
