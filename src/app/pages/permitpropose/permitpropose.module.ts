import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermitproposePageRoutingModule } from './permitpropose-routing.module';

import { PermitproposePage } from './permitpropose.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermitproposePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PermitproposePage]
})
export class PermitproposePageModule {}
