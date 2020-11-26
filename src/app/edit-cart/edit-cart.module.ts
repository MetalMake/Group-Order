import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCartPageRoutingModule } from './edit-cart-routing.module';

import { EditCartPage } from './edit-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCartPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditCartPage]
})
export class EditCartPageModule {}
