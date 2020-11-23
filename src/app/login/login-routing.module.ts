import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';
import { Tab1PageRoutingModule } from '../tab1/tab1-routing.module';

import { LoginPage } from './login.page';
import { TabsPage } from '../tabs/tabs.page';
import { Tab1Page } from '../tab1/tab1.page';



const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'tabs',
    component: TabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
