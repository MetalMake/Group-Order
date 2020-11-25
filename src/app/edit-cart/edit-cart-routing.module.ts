import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCartPage } from './edit-cart.page';

const routes: Routes = [
  {
    path: '',
    component: EditCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCartPageRoutingModule {}
