import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermitpostedPage } from './permitposted.page';

const routes: Routes = [
  {
    path: '',
    component: PermitpostedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermitpostedPageRoutingModule {}
