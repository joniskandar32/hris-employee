import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposepermitPageRoutingModule } from './proposepermit-routing.module';

import { ProposepermitPage } from './proposepermit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposepermitPageRoutingModule
  ],
  declarations: [ProposepermitPage]
})
export class ProposepermitPageModule {}
