import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodCoresPage } from './cod-cores.page';

const routes: Routes = [
  {
    path: '',
    component: CodCoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodCoresPageRoutingModule {}
