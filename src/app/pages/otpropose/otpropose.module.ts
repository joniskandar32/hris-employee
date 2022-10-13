import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtproposePageRoutingModule } from './otpropose-routing.module';

import { OtproposePage } from './otpropose.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtproposePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [OtproposePage]
})
export class OtproposePageModule {}
