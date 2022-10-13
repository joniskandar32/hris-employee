import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostedpermitPageRoutingModule } from './postedpermit-routing.module';

import { PostedpermitPage } from './postedpermit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostedpermitPageRoutingModule
  ],
  declarations: [PostedpermitPage]
})
export class PostedpermitPageModule {}
