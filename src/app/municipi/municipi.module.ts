import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunicipiPageRoutingModule } from './municipi-routing.module';

import { MunicipiPage } from './municipi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunicipiPageRoutingModule
  ],
  declarations: [MunicipiPage]
})
export class MunicipiPageModule {}
