import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimpostedPage } from './claimposted.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimpostedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimpostedPageRoutingModule {}
