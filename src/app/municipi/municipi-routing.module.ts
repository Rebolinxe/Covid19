import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunicipiPage } from './municipi.page';

const routes: Routes = [
  {
    path: '',
    component: MunicipiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunicipiPageRoutingModule {}
