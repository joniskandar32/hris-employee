import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermitpostedPageRoutingModule } from './permitposted-routing.module';

import { PermitpostedPage } from './permitposted.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermitpostedPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PermitpostedPage]
})
export class PermitpostedPageModule {}
