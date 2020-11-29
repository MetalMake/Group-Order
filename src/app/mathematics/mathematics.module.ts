import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathematicsPageRoutingModule } from './mathematics-routing.module';

import { MathematicsPage } from './mathematics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathematicsPageRoutingModule
  ],
  declarations: [MathematicsPage]
})
export class MathematicsPageModule {}
