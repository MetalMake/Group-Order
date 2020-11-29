import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinnishPage } from './finnish.page';

const routes: Routes = [
  {
    path: '',
    component: FinnishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinnishPageRoutingModule {}
