import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinnishPageRoutingModule } from './finnish-routing.module';

import { FinnishPage } from './finnish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinnishPageRoutingModule
  ],
  declarations: [FinnishPage]
})
export class FinnishPageModule {}
