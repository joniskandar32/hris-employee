import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposepermitPage } from './proposepermit.page';

const routes: Routes = [
  {
    path: '',
    component: ProposepermitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposepermitPageRoutingModule {}
