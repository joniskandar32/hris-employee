import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimproposePageRoutingModule } from './claimpropose-routing.module';

import { ClaimproposePage } from './claimpropose.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimproposePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ClaimproposePage]
})
export class ClaimproposePageModule {}
