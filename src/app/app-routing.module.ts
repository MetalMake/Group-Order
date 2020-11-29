<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
=======
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },  {
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
    path: 'create-course',
    loadChildren: () => import('./create-course/create-course.module').then( m => m.CreateCoursePageModule)
  },
  {
    path: 'edit-cart',
    loadChildren: () => import('./edit-cart/edit-cart.module').then( m => m.EditCartPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'mathematics',
    loadChildren: () => import('./mathematics/mathematics.module').then( m => m.MathematicsPageModule)
  },
  {
    path: 'finnish',
    loadChildren: () => import('./finnish/finnish.module').then( m => m.FinnishPageModule)
  },
  {
    path: 'biology',
    loadChildren: () => import('./biology/biology.module').then( m => m.BiologyPageModule)
  },

 /*  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },

    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'create-course',
    loadChildren: () => import('./create-course/create-course.module').then( m => m.CreateCoursePageModule)
  },
  {
    path: 'edit-cart',
    loadChildren: () => import('./edit-cart/edit-cart.module').then( m => m.EditCartPageModule)
  }, */

 
=======

>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======

>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======

>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======

>>>>>>> parent of a5f3678... tab4 sekoilu jatku



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
=======
>>>>>>> parent of a5f3678... tab4 sekoilu jatku
