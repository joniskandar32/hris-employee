import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimpostedPageRoutingModule } from './claimposted-routing.module';

import { ClaimpostedPage } from './claimposted.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimpostedPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ClaimpostedPage]
})
export class ClaimpostedPageModule {}
