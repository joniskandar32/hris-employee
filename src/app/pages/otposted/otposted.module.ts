import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpostedPageRoutingModule } from './otposted-routing.module';

import { OtpostedPage } from './otposted.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpostedPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [OtpostedPage]
})
export class OtpostedPageModule {}
