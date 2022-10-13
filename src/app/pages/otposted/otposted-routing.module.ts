import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpostedPage } from './otposted.page';

const routes: Routes = [
  {
    path: '',
    component: OtpostedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpostedPageRoutingModule {}
