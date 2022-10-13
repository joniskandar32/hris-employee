import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostedpermitPage } from './postedpermit.page';

const routes: Routes = [
  {
    path: '',
    component: PostedpermitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostedpermitPageRoutingModule {}
