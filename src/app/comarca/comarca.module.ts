import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComarcaPageRoutingModule } from './comarca-routing.module';

import { ComarcaPage } from './comarca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComarcaPageRoutingModule
  ],
  declarations: [ComarcaPage]
})
export class ComarcaPageModule {}
