import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
<<<<<<< HEAD
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
        path: 'create-course',
        loadChildren: () => import('../create-course/create-course.module').then(m => m.CreateCoursePageModule)
      },
      {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
