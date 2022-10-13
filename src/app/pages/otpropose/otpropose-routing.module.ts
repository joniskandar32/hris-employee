import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtproposePage } from './otpropose.page';

const routes: Routes = [
  {
    path: '',
    component: OtproposePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtproposePageRoutingModule {}
