import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComarcaPage } from './comarca.page';

const routes: Routes = [
  {
    path: '',
    component: ComarcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComarcaPageRoutingModule {}
