import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsPageModule } from '../tabs/tabs.module';

import { LoginPage } from './login.page';
import { TabsPage } from '../tabs/tabs.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'tabs/tab1',
    component: Tab1Page
  },
  {
    path: 'tab2',
    component: Tab2Page
  },
  {
    path: 'tab3',
    component: Tab3Page
  },
  {
    path: 'tabs/tab1',
    component: TabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
